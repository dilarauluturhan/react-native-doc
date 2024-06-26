<div align="center">
  <h1 align="center">React Native Notlarım</h1>
</div>

### ✨React ve React Native Temelleri✨

- **JSX** React'ın dil formatıdır.
- **Component** React dünyasınındaki her bir parçadır. Değer alabilen ve aldığı değerleri render edebilen özel yapılardır.
- **Stillendirmede** React Native **Yoga Layout** yapısını kullanır. Aynı CSS'de olduğu gibi benzer property'ler kullanılarak isimlendirme yapılır. Örneğin:

```
  StyleSheet.create({
          backgroundColor: 'red',
          padding: 10,
          marginTop: 5,
          borderRadius: 20
          borderWidth: 1
    })
```

yapısı örnek bir stillendirmedir.

- https://www.yogalayout.dev/playground/
- https://flexbox.buildwithreact.com

- **Custom Component**: React olabildiğince sade bir kod yazmayı hedefler. Karmaşıklığa doğru gidebilecek her bir component yapısı sadeleştirilmelidir. Tekrarlı kullanıma ihtiyaç duyulabilecek bir yapı söz konusuysa burada devreye onu componentlere ayırmak giriyor. Kendi yaşam döngüleri olan componentler üzerinden gitmek her zaman karmaşık yapılara kıyasla daha mantıklı bir çözümdür.

### ✨Expo ile React Native Projesi Oluşturma✨

Expo ile React Native projesi oluşturmak için aşağıdaki adımları izlemeliyiz:

- Terminale gidip `npx create-expo-app --template` komutuyla kurulumu başlatıyoruz.
- Kurulumu yaparken karşımıza 4 adet template çıkacaktır. Bunlar:
  `Blank` **(JavaScript ile minimal bir yapıda app yazmak için)**
  `Blank (TypeScript)` **(TypeScript ile minimal bir yapıda app yazmak için)**
  `Navigation (TypeScript)` **(Navigation, Expo Router olarak geçiyor yani React Navigation üzerine yazılmış bir paket. File-based routing için kullanılıyor, dosya adınızın ismine göre route işlemi yapıyor.)**
  `Blank (Bare)`

**Blank(TypeScript)**'i seçerek kuruluma devam ediyoruz.

- Daha sonra **What is your app named?** çıkıyor. Projenizin adını yazıyorsunuz. Ve uygulama kurulumu başlıyor.
- Kurulum tamamlandıktan sonra projeyi Visual Studio Code'da açıyoruz. Bu aşamaya geldiğinizde telefonunuza Expo'nun uygulamasını indirip giriş yapmış olmanız gerekir.
- Terminale gidip `npx expo start` diyerek projeyi ayağa kaldırıyoruz ve terminalde karşımıza QR code çıkıyor. Bu kodu Expo uygulamasında okuttuğumuzda kod çıktılarımızı görebiliyoruz.
- Expo uygulamasından kaynaklı bir hatadan dolayı `npx expo start` bazen çalışmayabilir bu durumda ise `npx expo start --tunnel` komutunu çalıştırarak tekrar deneyebilirsiniz.
- Expo uygulamasında ayağa kaldırdığım proje örneği:

![](https://github.com/dilarauluturhan/reactive/assets/120499369/8507904f-ba3f-4841-9a08-c9d11d8e046e)

### ✨JSX, Component ve Style✨

- `<View>` etiketi projenin container işlevine sahiptir. Web'deki karşılığı `<div>` etiketidir. View, kendi içinde tuttuğu child'ları ne kadar yer kaplıyorsa default olarak o kadar yer kaplar.
- `<Text>` etiketi metinler içindir. Web'deki karşılığı `<p>` etiketidir.
- `<Image>` etiketi resimler içindir. Web'deki karşılığı `<img>` etiketidir.
- `<ScrollView>` etiketi ekranımızın kaydırılabilir olmasını sağlar.
- `<FlatList>` etiketi ScrollView ile benzer özelliğe sahip hazır bir componenttir. Listeleme/Carousel yaparken kullanırız.
- `<TextInput>` etiketi metin alanları içindir. Web'deki karşılığı `<input type="text">` etiketidir.
- **StyleSheet**, daha temiz bir şekilde style oluşturduğumuz React Native modülüdür.
- **TouchableOpacity**, custom component oluştururken kullandığımız bir button componentidir. Bu, basabildiğimiz ve opacity efekti veren bir componenttir. View'a verebildiğimiz stilleri bu componente de verebiliriz.
- Ekranın şu kadarını kapla, ekranın tamamını kapla, ekranın yarısını kapla, ekranı bu kadarlık oranla kapla gibi bir özelliğe ihtiyacımız olursa **Flex** kullanırız. **Flex**'in tam işlevi şudur: _Bulunduğun yerin sınırları içerisinde kaplayabildiğin kadar yer kapla._

1. https://reactnative.dev/docs/flexbox
2. https://youtu.be/HSZ6iX58xls?si=Agn0LZUCoeL-aHIV
3. https://youtu.be/vOsMMhci1TY?si=hTYGkJxl8i5BwFCV

- **Dimensions**: Responsive bir tasarım istediğimizde kullanırız. Örneğin **height** vereceksem ekran büyüdükçe height büyüsün ekran küçüldükçe height küçülsün diyebilmem için Dimensions kullanırız. Örnek kod bloğu:

```
import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    headerMain: {
        height: 30,
        backgroundColor: 'red',
    }

})

export default styles;
```

- _`<Image>` etiketine style vermezsen çalışmaz._

#### Bu konulardan öğrendiklerimle yaptığım Getir Adres componenti:

![](https://github.com/dilarauluturhan/reactive/assets/120499369/e30d8c6a-0556-4bba-9027-add11d198ab0)

- Banner wrap yapabilmek için **useRef()** kullanırız **çünkü kendi item'larımızın değiştiğini anlamamızı sağlıyor.**

#### Bu konudan öğrendiklerimle yaptığım Getir Banner componenti:

![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/d7e8dbe5-7656-48a7-9820-4f269feaa9da)

- Component yapısı hakkında video: https://youtu.be/EYJqMx-mXLU?si=ccJJs8ioWqWGkAzF

#### Bu konudan öğrendiklerimle yaptığım Categories componenti:

![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/15c1035f-7a7c-4f71-9701-a349741a8f85)

### ✨State ve Lifecycle✨

- **State**
  Değişkenimiz zaman içerisinde değişiklik gösterecek mi göstermeyecek mi? Cevap evet ise işimiz state ile demektir. **useState()**'te parantezin içine sayfa açıldığında ilk görmek istediğim veriyi yazıyorum.

- **Lifecycle**
  Herhangi bir component doğar, ekrana düşer ve ölür. Bu yaşam döngüsüne _Lifecycle_ denir. Componentte herhangi bir güncelleme yapmak istiyorsak yani o componentin yaşam döngüsüne erişmek istiyorsak bu noktada ihtiyacımız olan yapı _Lifecycle_ yapısıdır. Functional componentlarda yaşam döngüsünde büyük rol oynayan hook **useEffect** hook’udur. useEffect 2 amaçla kullanılır:

1. State'e etki etmek,
2. Component ekrana basıldığında bir şey çalıştırmak.

---

useEffect(**() => {}**, **[]**) 2 parametre alır:

1. fonksiyon
2. hangi state'i takip edeceksem onu eklediğim köşeli parantez

![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/b07d53ca-db29-491c-b967-08c859ce5ed5)

### ✨Class vs Functional Component✨
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/4b6eacf0-3723-4e4e-939a-73ecd441b07c)
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/dabf4f32-0664-469a-ba21-eb32edd57ed0)
---
#### Class vs Functional Component State Gösterimi
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/7c89ce04-dae9-4357-bfc6-a22b62c5520d)
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/704374d6-9dc8-4526-b721-52fe19ef04ff)
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/97cf7cfb-64bd-4c4c-a141-fec93df77485)
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/2e9b1883-4d0d-4c19-9405-f8c3f8dea36e)
---
#### Class vs Functional Component Lifecycle
![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/965d5405-13ba-4c02-93e2-1d91ff491b7e)
*Kaynak: Ezran Bayantemur*

### ✨Router ve Navigation✨

React Native uygulamalarında yönlendirme için bir çok alternatif paket var.

- https://reactnavigation.org
- https://github.com/wix/react-native-navigation
- https://github.com/aksonov/react-native-router-flux
---

Bunlardan **React Navigation**'ı kullanacağım. React Navigation, topluluğun geliştirdiği ve sayfalar arası gezinmeyi sağlayan üçüncü parti bir kütüphanedir.
React Navigation hakkında daha fazla bilgi almak için linkini bıraktığım yazıya bakabilirsiniz: https://medium.com/@dilarauluturhan/ekranlar-arası-yolculuk-react-navigation-2d971aee6697

---

- Not: React Native'de conditional yapı şu şekilde olur: **{helloFlag && <Hello//>}** -> helloFlag true ise Hello componentini çağır demektir.

#### Bu konudan öğrendiklerimle yaptığım ana sayfa için Navigation kullanımı- Header componenti:

![](https://github.com/dilarauluturhan/react-native-doc/assets/120499369/06b34050-37c9-4fce-ab4b-8d0536b4f4ea)

### ✨Deep Linking✨

- https://reactnavigation.org/docs/deep-linking

- **Deep Linking**, herhangi bir sayfaya giden linki başkasıyla paylaşmamızı sağlar.

---

#### Faydalandığım Kaynaklar:

- https://reactnative.dev
- https://expo.dev
- https://academy.patika.dev/tr/paths/react-native-ile-mobile-app-patikasi
- https://www.youtube.com/playlist?list=PLpL5Mp-2VZdI5yIoGKBsY_p4V2RySUH1W
- https://www.youtube.com/@AtalayJS
