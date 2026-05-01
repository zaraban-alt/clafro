const countdown = document.getElementById('countdown');
let seconds = 15 * 60;

setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const rest = String(seconds % 60).padStart(2, '0');
    countdown.textContent = `${minutes}:${rest}`;
}, 1000);

const whatsappNumber = '212721300670';

document.getElementById('orderForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const city = form.city.value.trim();
    const pack = form.elements.pack ? form.elements.pack.value : '1 منتج - 199 درهم';
    const message = [
        'سلام، بغيت نأكد الطلبية ديالي ديال Clafro.',
        '',
        'هادو هما المعلومات الخاصة بيا:',
        '',
        `الاسم الكامل: ${name}`,
        `رقم الهاتف: ${phone}`,
        `المدينة: ${city}`,
        `المنتج: Clafro Anti Dandruff Spray 100ml`,
        `العرض المختار: ${pack}`,
        '',
        'بغيت الدفع يكون عند الاستلام. شكرا.'
    ].join('\n');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    document.getElementById('formNote').textContent = 'تم تسجيل طلبك بنجاح. غادي نتاصلو بك قريبا لتأكيد الطلب.';
    window.open(whatsappUrl, '_blank', 'noopener');
    form.reset();
});
