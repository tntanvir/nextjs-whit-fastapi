// import React from 'react';
// import { feedData } from '@/lib/fetchdata';

// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Heart, MessageCircle } from "lucide-react";


// const Feed = async () => {

//     const posts = await feedData();
//     // console.log(pets)
//     return (
//         <div className="max-w-2xl mx-auto space-y-4">
//             {posts.map((post) => (
//                 <Card key={post.id} className="shadow-md rounded-lg overflow-hidden">
//                     <CardContent className="p-4">
//                         {/* User Info */}
//                         <div className="flex items-center gap-3">
//                             {/* <Avatar>
//                                 <AvatarImage src={post.user.image} alt={post.user.name} />
//                             </Avatar>
//                             <div>
//                                 <p className="font-semibold">{post.user.name}</p>
//                                 <p className="text-sm text-gray-500">{post.publication_date}</p>
//                             </div> */}
//                         </div>

//                         {/* Post Image */}
//                         {post.id && (
//                             <img
//                                 src='https://lh7-us.googleusercontent.com/h9pon06LEkl8lwOLtD-beXPHhYWNfDc05c1n1Rxkddvj05ch5orUUtEdWY8P6aDKcybG51u8pVS9Zf5OCE2P1UmKYc_IEn7MNdJgIfDfUILs0sgyPLLp1KCEMcFEHYGHjTU3Fn2-6GTt6dfMhri5l9Q'
//                                 alt="Post"
//                                 className="w-full h-64 object-cover mt-4 rounded-lg"
//                             />
//                         )}

//                         {/* Post Content */}
//                         <h2 className="text-lg font-semibold mt-3">{post.title}</h2>
//                         <p className="text-gray-700 mt-2">{post.description}</p>

//                         {/* Actions */}
//                         <div className="flex justify-between items-center mt-4">
//                             <Button variant="ghost" className="flex items-center gap-1">
//                                 <Heart className="w-5 h-5" /> 100k
//                             </Button>
//                             <Button variant="ghost" className="flex items-center gap-1">
//                                 <MessageCircle className="w-5 h-5" /> 20k
//                             </Button>
//                         </div>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default Feed;


import React from "react";
import { feedData } from "@/lib/fetchdata";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

const Feed = async () => {
    const posts = await feedData();

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Card key={post.id} className="shadow-md rounded-lg overflow-hidden  p-0">
                        <CardContent className="px-1 ">
                            {/* User Info */}
                            {/* <div className="flex items-center gap-3">
                                <Avatar>
                  <AvatarImage src={post.user.image} alt={post.user.name} />
                </Avatar>
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-sm text-gray-500">{post.user.location}</p>
                  <p className="text-xs text-gray-400">{post.publication_date}</p>
                </div>
                            </div> */}

                            {/* Post Image */}
                            {post.id && (
                                <Link href={`/feed/${post.id}`}>
                                    <img
                                        src='https://lh7-us.googleusercontent.com/h9pon06LEkl8lwOLtD-beXPHhYWNfDc05c1n1Rxkddvj05ch5orUUtEdWY8P6aDKcybG51u8pVS9Zf5OCE2P1UmKYc_IEn7MNdJgIfDfUILs0sgyPLLp1KCEMcFEHYGHjTU3Fn2-6GTt6dfMhri5l9Q'
                                        alt="Post"
                                        className="w-full h-64 object-cover mt-1 rounded-lg"
                                    />
                                </Link>
                            )}

                            {/* Post Content */}
                            <div className="px-3">
                                <h2 className="text-sm border-[.5px] w-fit px-2  rounded-md font-semibold mt-3 bg-green-300/20">{post.is_avilable ? 'True' : 'False'}</h2>
                                <h2 className="text-lg font-semibold mt-3">{post.name}</h2>
                                <p className="text-gray-700 mt-2">{(post.discription).slice(0, 20)}</p>

                                {/* Actions */}
                                <div className="flex justify-between items-center mt-4">
                                    <Button variant="ghost" className="flex items-center gap-1">
                                        <Heart className="w-5 h-5" /> 200k Likes
                                    </Button>
                                    <Button variant="ghost" className="flex items-center gap-1">
                                        <MessageCircle className="w-5 h-5" /> 10k Comments
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Feed;
