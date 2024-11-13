function ToSlug(text) {
    return text
        .toLowerCase()
        .replace(/%/g, '')                      // '%' karakterini kaldır
        .replace(/[çÇ]/g, 'c')                  // Türkçe karakterleri dönüştür
        .replace(/[ğĞ]/g, 'g')
        .replace(/[üÜ]/g, 'u')
        .replace(/[şŞ]/g, 's')
        .replace(/[ıİ]/g, 'i')
        .replace(/[öÖ]/g, 'o')
        .replace(/[^a-z0-9\s-]/g, '')           // Alfasayısal olmayan karakterleri kaldır
        .trim()                                 // Baş ve sondaki boşlukları kaldır
        .replace(/\s+/g, '-')                   // Boşlukları '-' ile değiştir
        .replace(/-+/g, '-');                   // Fazla '-' işaretlerini tek bir '-' ile değiştir
}

export default ToSlug