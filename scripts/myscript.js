// Sepete Ürün Ekleme Fonksiyonu
function sepeteEkle(urunAdi, fiyat) {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    sepet.push({ ad: urunAdi, fiyat: fiyat });
    localStorage.setItem('sepet', JSON.stringify(sepet));
    alert(urunAdi + " sepetinize eklendi! 🛒");
}

// Sepet Sayfası Yüklendiğinde Ürünleri Listeleme
document.addEventListener("DOMContentLoaded", function() {
    const sepetTablosu = document.getElementById('cart-items');
    const toplamEtiketi = document.getElementById('cart-total');
    
    if (sepetTablosu) {
        let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
        sepetTablosu.innerHTML = '';
        let toplam = 0;
        
        if (sepet.length === 0) {
            sepetTablosu.innerHTML = '<tr><td colspan="2" align="center"><br>Sepetiniz şu an boş.</td></tr>';
        } else {
            sepet.forEach(function(urun) {
                let row = `<tr>
                    <td>${urun.ad}</td>
                    <td><b>${urun.fiyat} TL</b></td>
                </tr>`;
                sepetTablosu.innerHTML += row;
                toplam += urun.fiyat;
            });
        }
        toplamEtiketi.innerText = toplam;
    }
});

// Sepeti Tamamen Temizleme
function sepetiTemizle() {
    localStorage.removeItem('sepet');
    location.reload();
}

// Sipariş Form Alanını Gösterme
function siparisFormunuAc() {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    if (sepet.length === 0) {
        alert("Sepetiniz boşken sipariş oluşturamazsınız! ❌");
        return;
    }
    document.getElementById('siparis-alani').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

// Siparişi Onaylama ve Bitirme
function siparisiOnayla(event) {
    event.preventDefault();
    
    const isim = document.getElementById('order-name').value;
    
    alert("Teşekkürler " + isim + "! 🎉\nSiparişiniz başarıyla oluşturuldu.\nEn kısa sürede kargoya verilecektir.");
    
    // Sepeti sıfırla ve sayfayı yenile
    localStorage.removeItem('sepet');
    window.location.href = "index.html";
}

// İletişim Formu Kontrolü
function formuKontrolEt(event) {
    event.preventDefault();
    const isim = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mesaj = document.getElementById('message').value;
    
    if (isim == "" || email == "" || mesaj == "") {
        alert("Lütfen tüm alanları doldurun! ❌");
        return false;
    }
    
    alert("Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağız. ✉️");
    document.getElementById('contact-form').reset();
    return true;
}
