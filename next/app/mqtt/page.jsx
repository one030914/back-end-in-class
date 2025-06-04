"use client";

import { useState, useEffect } from "react";
import mqtt from "mqtt";

const EMQX_BROKER_URL = "wss://broker.emqx.io:8084/mqtt";
const TOPIC_PUBLISH = "next/test/pub";
const TOPIC_SUBSCRIBE = "next/test/#";

export default function Page() {
    const [client, setClient] = useState(null);
    const [recive, setRecive] = useState([]);
    const [send, setSend] = useState("");
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const mqttClient = mqtt.connect(EMQX_BROKER_URL, {
            clientId: `nextjs-client-${Math.random().toString(16).substring(2, 10)}`,
            clean: true,
            connectTimeout: 4000,
            reconnectPeriod: 1000,
        });

        setClient(mqttClient);

        mqttClient.on("connect", () => {
            console.log("Connected to MQTT broker");
            setIsConnected(true);

            mqttClient.subscribe(TOPIC_SUBSCRIBE, (err) => {
                if (err) {
                    console.error("Subscription error:", err);
                } else {
                    console.log(`Subscribed to topic: ${TOPIC_SUBSCRIBE}`);
                }
            });
        });

        mqttClient.on("message", (topic, payload) => {
            const newMessage = {
                topic,
                payload: payload.toString(),
                timestamp: new Date().toLocaleDateString(),
            };
            console.log("Received message:", newMessage);
            setRecive((prev) => [...prev, newMessage]);
        });

        mqttClient.on("error", (error) => {
            console.error("Connection error:", error);
            setIsConnected(false);
        });

        mqttClient.on("close", () => {
            console.log("Connection closed");
            setIsConnected(false);
        });

        return () => {
            if (client) {
                client.end();
            }
        };
    }, []);

    const sendMessage = () => {
        if (client && isConnected && send.trim()) {
            client.publish(TOPIC_PUBLISH, send, (err) => {
                if (err) {
                    console.error("Publish error:", err);
                } else {
                    console.log(`Message sent: ${send}`);
                    setSend("");
                }
            });
        } else {
            console.warn("Client is not connected");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">MQTT Demo (EMQX)</h1>

            <div className="mb-4">
                <p className="mb-2">
                    {EMQX_BROKER_URL} connect status:
                    <span
                        className={`ml-2 px-2 py-1 rounded ${
                            isConnected ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                        {isConnected ? "Connected" : "Disconnected"}
                    </span>
                </p>

                <div className="flex mb-4">
                    <input
                        type="text"
                        value={send}
                        onChange={(e) => setSend(e.target.value)}
                        placeholder="Type your message"
                        className="flex-1 p-2 border rounded-l"
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!isConnected}
                        className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </div>

                <div className="border rounded p-4">
                    <h2 className="font-bold mb-2">Received Messages</h2>
                    {recive.length === 0 ? (
                        <p className="text-gray-500">No Messages recived yet.</p>
                    ) : (
                        <ul className="space-y-2">
                            {recive.map((msg, index) => (
                                <li key={index} className="p-2 border rounded bg-gray-50">
                                    <p className="text-sm text-gray-500">{msg.timestamp}</p>
                                    <p className="font-bold">{msg.topic}</p>
                                    <p>Message: {msg.payload}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
