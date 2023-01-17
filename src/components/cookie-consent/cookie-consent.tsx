import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

import { cookieConsentRejected, cookieConsentGranted, showCookiebanner } from "./cookie-consent-logic";


export default component$(() => {

    const state = useStore<{ showCookiebanner: boolean | null }>({ showCookiebanner: null });

    useClientEffect$(() => {
        state.showCookiebanner = showCookiebanner() || false;
    }, {
        eagerness: 'idle', // 'load' | 'visible' | 'idle'
    })

    return (
        <>

            <div class={
                state.showCookiebanner ? 'max-w-screen-lg mx-auto fixed bg-white p-5 inset-x-0 bottom-[10px] rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between'
                    : 'hidden'}>
                <div class="w-full">This website uses cookies to keep track of your cookie preferences and to analyze our Internet traffic. We do not share this information with third parties.
                    {/* <a href="#" class="decoration-orange-600 whitespace-nowrap  hover:underline">Learn more</a> */}
                </div>
                <div class="flex gap-4 items-center flex-shrink-0">

                    <button id="cookie-reject-button" onClick$={() => {
                        cookieConsentRejected();
                        state.showCookiebanner = false;
                    }}
                        class="text-orange-600 focus:outline-none hover:underline hover:text-orange-700">Reject</button>
                    <button class="bg-orange-600 px-5 py-2 text-white rounded-md hover:bg-orange-700 focus:outline-none" onClick$={() => {
                        cookieConsentGranted();
                        state.showCookiebanner = false;
                    }}>Accept all</button>
                </div>
            </div>
        </>
    );
});
