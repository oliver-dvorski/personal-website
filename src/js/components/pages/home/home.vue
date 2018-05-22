<template>
    <div>
        <fancy-header>
            <h1>Oliver Dvorski</h1>
            <p slot="subtitle">Full stack web developer</p>
        </fancy-header>
        <client-work></client-work>
        <personal-projects></personal-projects>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import clientWork from './clientWork'
    import personalProjects from './personalProjects'
    import pageFooter from './footer'

    export default {
        components: { clientWork, personalProjects, pageFooter }
    }
</script>
