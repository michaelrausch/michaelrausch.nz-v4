export default function Photography() {
    return (
        <div class="bg-gray-900 overflow-hidden relative lg:flex lg:items-center">
            <div class="w-full ">
                <h2 class="text-3xl font-extrabold text-white dark:text-white sm:text-4xl">
                    <span class="block">
                        Photography
            </span>
                </h2>
                <p class="text-md mt-4 text-gray-400">
                    I am currently shooting for Metropol Magazine, and am available to take on a limited amount of photography work. I have a wide range of experience, so feel free to take a look at my portfolio and get in touch.
                </p>
                <div class="lg:mt-0 lg:flex-shrink-0 ">
                    <div class="mt-12 inline-flex rounded-md shadow">
                        <a href="https://photography.michaelrausch.nz" rel="noreferrer" target="_blank" class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md">
                            Portfolio
                         </a>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-8 pl-8 lg:pl-24 hidden lg:flex ">
                <img src="/images/5.png" class="rounded-lg w-1/2 " alt="Tree" />
                <div>
                    <img src="/images/6.jpg" class="rounded-lg mb-8" alt="Tree" />
                    <img src="/images/4.jpg" class="rounded-lg" alt="Tree" />
                </div>
            </div>
        </div>

    )
}