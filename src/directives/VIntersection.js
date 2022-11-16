export default {
    mounted(el, binding) {
        const intersectionObserver = new IntersectionObserver((entries) => {

            if (entries[0].intersectionRatio <= 0) return;

            
            binding.value()
        });
        // start observing
        intersectionObserver.observe(el);
    },
    name: 'intersection',
}