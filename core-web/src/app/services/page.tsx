import ServicesList from '@/components/services/ServicesList';
import { getServices } from '@/lib/content';

export default async function ServicesPage() {
    const services = await getServices();

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="mb-24">
                    <p className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-6">
                        Capabilities
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                        Technical Execution.
                    </h1>
                </div>

                <ServicesList services={services} />

            </div>
        </div>
    );
}
