'use client';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
const SingupPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();
    const singup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://fastapi-y4ox.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: username,
                    email: email,
                    password: password
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Registered:", data);
                router.push('/singin')
            } else {
                console.error(' Error:', data);

            }
        } catch (error) {
            console.error(' Request failed:', error);

        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Sign up now</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={singup}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Username</Label>
                            <Input
                                id="name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end items-center" />
        </Card>
    );
};

export default SingupPage;
