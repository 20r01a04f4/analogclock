setInterval(() => {
    d=new Date();
    ht=d.getHours();
    mt=d.getMinutes();
    st=d.getSeconds();
    hr=30*ht+mt/2;
    mr=6*mt;
    sr=6*st;

    hrs.style.transform = `rotate(${hr}deg)`;
    min.style.transform = `rotate(${mr}deg)`;
    sec.style.transform = `rotate(${sr}deg)`;
}, 1000);