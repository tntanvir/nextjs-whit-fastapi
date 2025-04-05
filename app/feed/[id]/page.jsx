import { feedDataSingle } from '@/lib/fetchdata';
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, DollarSign, PawPrint, Users } from "lucide-react";

const Page = async ({ params }) => {
    const { id } = params;

    // Fetch pet data
    const pet = await feedDataSingle(id);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
            <Card className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                {/* Pet Image & Basic Info */}
                <CardHeader className="flex flex-col items-center">
                    <Avatar className="w-32 h-32 border-4 border-blue-300 shadow-lg">
                        <AvatarImage src={pet.image || '/placeholder.jpg'} alt="Pet Image" />
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-2xl">{pet.species[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4 text-2xl font-bold text-gray-800">{pet?.name}</CardTitle>
                    <CardTitle className="mt-4 text-2xl font-bold text-gray-800">{pet.breed} - {pet.color}</CardTitle>
                    <Badge variant="secondary" className="mt-2 text-sm">
                        <PawPrint className="w-4 h-4 inline-block mr-1" /> {pet.species}
                    </Badge>
                </CardHeader>

                {/* Pet Details */}
                <CardContent className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <p><strong>Size:</strong> {pet.size}</p>
                        <p><strong>Sex:</strong> {pet.sex}</p>
                        <p className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> <strong>Fee:</strong> ${pet.fee}</p>
                        <p className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> <strong>Location:</strong> {pet.location}</p>
                        <p><strong>Available:</strong>
                            <Badge className={`ml-2 ${pet.is_avilable ? "bg-green-500" : "bg-red-500"}`}>
                                {pet.is_avilable ? "Yes" : "No"}
                            </Badge>
                        </p>
                    </div>

                    {/* Description */}
                    <Separator className="my-4" />
                    <CardDescription className="text-gray-600 text-md leading-relaxed">
                        {pet.discription}
                    </CardDescription>

                    {/* Owner Info */}
                    <Separator className="my-4" />
                    <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold">Owner ID:</h3>
                        <p className="text-gray-800">{pet.owner}</p>
                    </div>

                    {/* Reviews Section */}
                    {pet.reviews.length > 0 && (
                        <>
                            <Separator className="my-4" />
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                <Star className="w-5 h-5 text-yellow-500 mr-2" /> Reviews
                            </h3>
                            <div className="space-y-4">
                                {pet.reviews.map((review) => (
                                    <Card key={review.id} className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                                        <div className="flex items-center space-x-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarFallback className="bg-blue-500 text-white">{review.owner.username[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-gray-900">{review.owner.username}</p>
                                                <p className="text-gray-500 text-sm">{new Date(review.created_at).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-gray-800">{review.text}</p>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
