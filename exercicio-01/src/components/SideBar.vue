<template>
    <div class="sidebar">
        <transition name="slide">
            <div
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data: () => ({
            isPanelOpen: true
        }),
        methods: {
            closeSidebarPanel() {
                this.isPanelOpen = false
            }
        }
    }
</script>
<style>
    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 250px;
    }
</style>