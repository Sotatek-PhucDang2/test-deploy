"use client";
import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Socket, io } from "socket.io-client";

const domain = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface Props {
  children: React.ReactNode;
}

interface SocketInterface {
  isConnected: boolean;
  addEvent: (
    // eslint-disable-next-line no-unused-vars
    eventName: string,
    // eslint-disable-next-line no-unused-vars
    handleEventCallback: (data: unknown) => void
  ) => void;
  removeEvent: (
    // eslint-disable-next-line no-unused-vars
    eventName: string,
    // eslint-disable-next-line no-unused-vars
    listener?: (data: unknown) => void
  ) => void;
  connect: () => void;
  disconnect: () => void;
}

export const SocketContext = createContext<SocketInterface>({
  isConnected: false,
  addEvent: () => {},
  removeEvent: () => {},
  connect: () => {},
  disconnect: () => {},
});

const SocketProvider: React.FC<Props> = ({ children }) => {
  const accessToken = "123";
  const socket = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const logError = (message: string, error?: unknown) => {
    console.error(message, error);
  };

  const handleConnect = useCallback(() => {
    setIsConnected(true);
    console.log("Socket connected successfully!");
  }, []);

  const handleConnectError = useCallback((error: Error) => {
    setIsConnected(false);
    logError("Socket connection failed", error);
  }, []);

  const handleError = useCallback((error: Error) => {
    logError("Socket encountered an error", error);
  }, []);

  const handleMissingSocketInstance = useCallback(() => {
    logError("Socket instance is not initialized.");
  }, []);

  const initializeSocket = useCallback(() => {
    if (!socket.current) {
      socket.current = io(domain || "", {
        autoConnect: false,
        transports: ["websocket", "polling"],
        query: { authorization: accessToken },
      });

      socket.current.on("connect", handleConnect);
      socket.current.on("connect_error", handleConnectError);
      socket.current.io.on("error", handleError);
    }
  }, [accessToken, handleConnect, handleConnectError, handleError]);

  const connect = useCallback(() => {
    initializeSocket();
    if (socket.current && socket.current.disconnected) {
      socket.current.connect();
    }
  }, [initializeSocket]);

  const disconnect = useCallback(() => {
    if (socket.current) {
      socket.current.removeAllListeners();
      console.log("Removing all listeners and disconnecting socket");
      socket.current.disconnect();
      socket.current = null; 
      setIsConnected(false);
    }
  }, []);

  const addEvent = useCallback(
    (eventName: string, handleEventCallback: (  
      // eslint-disable-next-line no-unused-vars
      data: unknown) => void) => {
      if (socket.current) {
        console.log(`Adding event listener for ${eventName}`);
        socket.current.on(eventName, handleEventCallback);
      } else {
        handleMissingSocketInstance();
      }
    },
    [handleMissingSocketInstance]
  );

  const removeEvent = useCallback(
    (eventName: string, listener?: (
      // eslint-disable-next-line no-unused-vars
      data: unknown
    ) => void) => {
      if (socket.current) {
        if (listener) {
          socket.current.off(eventName, listener);
          console.log(`Removed specific listener for ${eventName}`);
        } else {
          socket.current.off(eventName);
          console.log(`Removed all listeners for ${eventName}`);
        }
      } else {
        handleMissingSocketInstance();
      }
    },
    [handleMissingSocketInstance]
  );

  useEffect(() => {
    if (accessToken) {
      disconnect();
      // connect();
    } else {
      disconnect();
    }
  }, [accessToken, connect, disconnect]);

  return (
    <SocketContext.Provider
      value={{ isConnected, addEvent, removeEvent, connect, disconnect }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;