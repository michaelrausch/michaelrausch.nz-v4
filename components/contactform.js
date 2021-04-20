export default function ContactForm() {
    return (
        <div class="bg-green-500 rounded-md" id="contact">
            <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span class="block text-white">
                        Contact Me
                    </span>
                    <a href="mailto:michael@rausch.nz?subject=Hello!">
                        <span class="block text-green-100 underline">
                            michael@rausch.nz
                    </span>
                    </a>

                </h2>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class=" inline-flex rounded-md shadow">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}