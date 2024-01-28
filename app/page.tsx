import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import {
    ArrowUpRight,
    ArrowUpRightFromSquare,
    Copy,
    Download,
} from 'lucide-react';

export default function Home() {
    return (
        <main className='flex h-screen flex-col items-center'>
            <div className='container w-full flex flex-col gap-4 py-10 items-center justify-center bg-secondary'>
                <Avatar className='h-20 w-20 border-2 border-white'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div className='flex flex-col items-center'>
                    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
                        Mochammad Bagas
                    </h4>
                    <p className=''>Front-end Engineering</p>
                </div>
            </div>
            <div className='container w-full min-h-screen mt-2 flex justify-center'>
                <Tabs defaultValue='about' className='w-full md:w-[500px]'>
                    <TabsList className='grid grid-cols-2 w-full justify-center'>
                        <TabsTrigger value='about'>About Me</TabsTrigger>
                        <TabsTrigger value='link'>Links</TabsTrigger>
                    </TabsList>
                    <TabsContent value='link'>
                        <div className='w-full flex flex-col gap-2 rounded-sm border-none'>
                            <Button
                                variant={'ghost'}
                                className='gap-2 flex justify-between'
                            >
                                Coming Soon
                                <span>
                                    <ArrowUpRight className='h-5 w-5' />
                                </span>
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='gap-2 flex justify-between'
                            >
                                Coming Soon
                                <span>
                                    <ArrowUpRight className='h-5 w-5' />
                                </span>
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='gap-2 flex justify-between'
                            >
                                Coming Soon
                                <span>
                                    <ArrowUpRight className='h-5 w-5' />
                                </span>
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='gap-2 flex justify-between'
                            >
                                Coming Soon
                                <span>
                                    <ArrowUpRight className='h-5 w-5' />
                                </span>
                            </Button>
                        </div>
                    </TabsContent>
                    <TabsContent value='about'>
                        <div className='w-full rounded-sm border-none px-4 py-5'>
                            <div className='flex flex-col gap-2 mb-4 px-1'>
                                <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                                    Welcome on board 👋
                                </h3>
                                <p className='text-sm'>
                                    {` I'm a front-end web designer with expertise
                                    in various aspects of website creation.`}
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <Button variant={'secondary'} className='gap-2'>
                                    <span>
                                        <Download className='h-5 w-5' />
                                    </span>
                                    Download CV
                                </Button>
                                <Button variant={'secondary'} className='gap-2'>
                                    <span>
                                        <Copy className='h-5 w-5' />
                                    </span>
                                    Email
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
