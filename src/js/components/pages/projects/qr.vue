<template>
    <div>
        <fancy-header size="narrow">
            <h1>QR dynamics</h1>
        </fancy-header>
        <div class="container mx-auto project-page">
            <div class="subsection">
                <img src="img/illustrations/vault.svg" alt="An illustration" class="illustration left">
                <div class="content">
                    <h3>$100 for QR codes?</h3>
                    <p>Dynamic QR codes are an interesting technology. With dynamic codes you can do all sorts of fun stuff from changing the end point that the code directs the users to, to collecting information from your visitors.</p>
                    <p>I found them to be a lot more interesting when I realised how they work. It's stupidly simple. So I decided to build a dynamic QR code generator for myself. Not quite for myself actually, I was working on the Justy24 project at the time so I was building this because I knew they would benefit from a generator like this.</p>
                </div>
            </div>
            <div class="subsection">
                <div class="content">
                    <h3>The roadmap</h3>
                    <p>The app itself is quite a bit dated at this point and I'm working on a V2.0 that would be a SPA. I'll then register a short domain for it so the resulting codes can be as simple as possible.</p>
                    <p>After building the SPA with the core functionality, I'd like to keep adding features like data collection and Google analytics integration.</p>
                </div>
                <img src="img/illustrations/checklist.svg" alt="An illustration" class="illustration right">
            </div>
        </div>
        <div class="cta">
            <div class="container mx-auto">
                <h2>Check the source out on github</h2>
                <div class="content">
                    <p>The project is quite out of date but since it is a personal one, you have full acccess to the code, enjoy</p>
                    <a href="https://github.com/oliver-dvorski/qr" class="button" target="_blank">Here's a link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    img
        max-height: 300px
    .content
        max-width: 700px
</style>
