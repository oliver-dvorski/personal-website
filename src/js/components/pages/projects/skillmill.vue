<template>
    <div>
        <fancy-header size="narrow">
            <h1>Skillmill</h1>
        </fancy-header>
        <div class="container mx-auto page-content">
            <div class="flex">
                <div class="content">
                    <h3>Overview</h3>
                    <p>Skillmill is a social networked market for creative talents, their services and products. It provides unique opportunities for creative minds. My task was to develop the front end of the application. The app itself was a SPA using Vue for the front end and communicating to a REST API built by a couple of backend devs.</p>
                    <p>I was provided with desktop designs and was expected to turn them into a rich UI. Part of the job was doing a little bit more than what people call “psd to html” - I had to think about animations that we’d use for a better UX as well as the entirety of the mobile version of the application since I’ve only been provided with designs for large screens and had to figure out how those would work on everything else</p>
                    <h3>Environment</h3>
                    <p>As far as the environment I was working in goes - Our team had a single manager that reported to the CEO, we had two backend developers and our manager doubled as the designer.</p>
                    <p>Working on Skillmill was super fun because I got to use my German. When I don't have German-speaking clients, I just keep loosing the language which is just too bad.</p>
                </div>
                <div>
                    <video src="videos/Skillmill.webm" controls autoplay muted></video>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .page-content
        margin-top: 1rem
        @media (min-width: 992px)
            .content
                padding-right: 1rem

    .flex
        flex-direction: column
        @media (min-width: 992px)
            justify-content: space-between
            flex-direction: row

    video
        max-width: 100%
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)
        border-radius: 5px
        @media (min-width: 992px)
            width: 640px
            transform: translateY(-4rem)
</style>
