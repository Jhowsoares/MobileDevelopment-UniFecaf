# Projeto de APP de Filmes

- Aplicativo de filmes desenvolvido para praticar conceitos basicos do react-native.


## Tutorial de instalação:

### Node e Expo:

#### ✅ 1. Verificar se o **Expo** já está instalado

Abra o **terminal**:

- **Windows**: Prompt de Comando ou PowerShell
    
- **macOS / Linux**: Terminal
    

Digite:

expo --version

##### 🔎 Resultado possível:

- **Aparece um número (ex: 50.0.0)** → ✅ Expo já está instalado
    
- **Erro tipo “comando não reconhecido”** → ❌ Não está instalado
    

---

#### ⚠️ Antes de instalar o Expo (passo obrigatório)

O Expo depende do **Node.js**.

##### Verificar se o Node.js está instalado:

node -v

- Se aparecer algo como `v18.x.x` ou `v20.x.x` → ok
    
- Se der erro → precisa instalar
    

##### Instalar Node.js

1. Acesse: [https://nodejs.org](https://nodejs.org)
    
2. Baixe a versão **LTS**
    
3. Instale normalmente (próximo, próximo, concluir)
    
4. Reinicie o terminal
    
5. Teste novamente:
    

node -v  
npm -v

---

#### 🚀 2. Instalar o **Expo CLI** (recomendado)

Hoje, o Expo recomenda usar o **Expo via NPX** (não global), mas vou te mostrar **as duas formas**.

---

##### ✅ Forma recomendada (mais moderna – sem instalar global)

Não precisa instalar nada agora.  
Sempre que quiser usar o Expo, você roda:

npx expo --version

Se funcionar → 🎉 pronto para usar

---

##### 🧰 Forma tradicional (instalação global)

npm install -g expo-cli

Depois verifique:

expo --version

---

#### 📱 3. Criar um projeto Expo (teste rápido)

No terminal, escolha uma pasta e execute:

npx create-expo-app meuApp

Depois:

cd meuApp  
npx expo start

Isso vai abrir:

- Um servidor local
    
- Um QR Code no navegador
    

---

#### 📲 4. Rodar no celular (mais fácil)

1. Instale o app **Expo Go** no celular:
    
    - Android: Play Store
        
    - iOS: App Store
        
2. Escaneie o QR Code
    
3. Seu app roda **sem emulador** 😄

---
---

## Tutorial de instalação do Expo Router
- **Documentação:**
  - [https://docs.expo.dev/router/installation/]

Se mesmo após configurar todo o seu app conforme foi ensinado na documentação você encontrar erro relacionado a "babel-config", tente executar esses comandos no seu terminal:

```
- CTRL + C
- npm install babel-preset-expo --save-dev
- npx expo start -c
```


