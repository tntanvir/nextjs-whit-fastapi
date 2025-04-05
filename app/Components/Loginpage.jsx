'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";



import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation';


const Loginpage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const login = async () => {
        const formData = new URLSearchParams();
        formData.append('grant_type', 'password');
        formData.append('username', username);
        formData.append('password', password);
        formData.append('scope', '');
        formData.append('client_id', 'string');
        formData.append('client_secret', 'string');

        try {
            const response = await fetch('https://fastapi-y4ox.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });

            const data = await response.json();
            if (response.ok) {

                sessionStorage.setItem('token', data?.access_token)
                alert('sussess')
                router.push('/')

            } else {
                console.error('Error:', data);
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };



    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Sign in now</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
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
                </form>
            </CardContent>
            <CardFooter className="flex justify-end items-center">
                <Button onClick={login}>Sign in</Button>
            </CardFooter>
        </Card>
    );
};

export default Loginpage;
