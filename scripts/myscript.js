let sepet = JSON.parse(localStorage.getItem('sepetim')) || [];

function sepeteEkle(urunAdi, urunFiyati) {
    sepet.push({ ad: urunAdi, fiyat: urunFiyati });
    localStorage.setItem('sepetim', JSON.stringify(sepet));
    alert(urunAdi + " sepetinize eklendi!");
}

function sepetiListele() {
    let tabloGovdesi = document.getElementById('cart-items');
    let toplamAlan = document.getElementById('cart-total');
    
    if (tabloGovdesi && toplamAlan) {
        tabloGovdesi.innerHTML = "";
        let toplamTutar = 0;
        
        if (sepet.length === 0) {
            tabloGovdesi.innerHTML = "<tr><td colspan='2' style='text-align:center;'>Sepetiniz boş.</td></tr>";
            toplamAlan.innerText = "0";
            return;
        }
        
        sepet.forEach(function(urun) {
            let satir = "<tr><td>" + urun.ad + "</td><td>" + urun.fiyat + " TL</td></tr>";
            tabloGovdesi.innerHTML += satir;
            toplamTutar += urun.fiyat;
        });
        
        toplamAlan.innerText = toplamTutar;
    }
}

function sepetiTemizle() {
    sepet = [];
    localStorage.removeItem('sepetim');
    sepetiListele();
    alert("Sepetiniz temizlendi.");
}

function formuKontrolEt(event) {
    event.preventDefault();
    let isim = document.getElementById('name').value.trim();
    let eposta = document.getElementById('email').value.trim();
    let mesaj = document.getElementById('message').value.trim();
    
    if (isim === "" || eposta === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz!");
        return false;
    }
    
    alert("Teşekkürler " + isim + ", mesajınız alındı!");
    document.getElementById('contact-form').reset();
    return true;
}

window.onload = function() {
    sepetiListele();
};
