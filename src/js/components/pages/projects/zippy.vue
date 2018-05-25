<template>
    <div>
        <fancy-header size="narrow">
            <h1>Zippy</h1>
        </fancy-header>
        <div class="container mx-auto project-page">
            <div class="subsection">
                <img src="img/illustrations/sharing.svg" alt="An illustration" class="illustration left">
                <div class="content">
                    <h3>Disposable link sharing</h3>
                    <p>Zippy is a file sharing platform designed to transfer files from one computer to another without the transfer of any sensitive information such as usernames and passwords.</p>
                    <p>I created Zippy because it solves a specific problem I had in school. The computers in my school have poor security implementations and all of them are compromised with malware. When a task required me to use one of those computers, I needed a way to transfer my work from them without connecting them in any way with my personal devices or using them to write out sensitive information (keyloggers are quite the concern with those machines). So my solution is to upload the results of my work to Zippy, scan the QR code with my phone and submit it - or the zip file - for review and grading.</p>
                </div>
            </div>
            <div class="subsection">
                <div class="content">
                    <h3>Uploads and security</h3>
                    <p>Zippy uses a dropzone to accept files through your file explorer or drag and drop. Using drag and drop, you can upload folders as well and their structure will be kept in the resulting zip file. The code is a bit messy since this was one of my first laravel projects but it just works so I don’t know when it’ll get an update.</p>
                    <p>The zip files get deleted after a month to preserve storage space since I designed the app only as a conduit, not a storage service. Which is also why there’s a 50MB file limit. I might increase that one though since I used Zippy for a couple of 45-49MB files myself.</p>
                </div>
                <img src="img/illustrations/security.svg" alt="An illustration" class="illustration right">
            </div>
        </div>
        <div class="cta">
            <div class="container mx-auto">
                <h2>Check the source out on github</h2>
                <div class="content">
                    <p>The project is quite out of date but since it is a personal one, you have full acccess to the code, enjoy</p>
                    <a href="https://github.com/oliver-dvorski/zippy" class="button" target="_blank">Here's a link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    img
        max-height: 350px
    .content
        max-width: 600px
</style>
