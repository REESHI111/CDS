import StudioGrid from '@/components/studio/StudioGrid';
import { getStudioProjects } from '@/lib/content';

export default async function StudioPage() {
    const projects = await getStudioProjects();

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-24 max-w-2xl">
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                        The Studio
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
                        Selected works & case studies.
                    </h1>
                    <p className="text-lg text-neutral-400 font-light">
                        An archive of engineered digital excellence.
                    </p>
                </div>

                <StudioGrid projects={projects} />

            </div>
        </div>
    );
}
