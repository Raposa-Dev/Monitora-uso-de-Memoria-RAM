### Monitor de uso de Memória RAM em Tempo Real

---

Este é um projeto simples em Node.js que cria um servidor HTTP para monitorar o uso de memória RAM do sistema em tempo real. 
Ele disponibiliza endpoints para verificar o status do servidor e obter estatísticas detalhadas da memória.

---

### Funcionalidades

- **Endpoint de status:** A rota `/` retorna uma mensagem simples, confirmando que o servidor está em execução.
- **Monitoramento de RAM:** A rota `/stats` fornece dados em formato JSON sobre o sistema operacional, arquitetura e uso de memória RAM (total, livre e percentual de uso).
- **Atualização em tempo real:** As estatísticas de RAM são atualizadas a cada 5 segundos no console, e o servidor responde com os dados mais recentes.


---



┌─────────────┬─────────────┐                                                                         
│ (index)     │ Values      │                                                                         
├─────────────┼─────────────┤                                                                         
│ TypeOS      │ 'linux'     │                                                                         
│ Archtecture │ 'x64'       │                                                                         
│ TotalRam    │ '7944 : MB' │                                                                         
│ FreeRam     │ '5771 : MB' │                                                                         
│ UsageRAM    │ '72.65 : %' │                                                                         
└─────────────┴─────────────┘                                                                         



Este projeto foi feito em um curso da DIO com o objetivo de melhor entendimento Node JS.

# Pré-Requisitos

---

- CPU;
    
    Intel: Core i3-530 
    
    RAM: 2 GB RAM;
    
- Navegador;
    
    Google Chrome;
    
    Edge;
    
    Firefox;
    
- 📵 Não a suporte para mobile no momento;

# 🧑🏼‍💻 Como Executar.

---

Descompactar pasta;

Entrar na pasta MONITORA-USO-DE-RAM, usar `node server.js`

# 👾 Como Contribuir

---

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature` ;

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

.

# 🧑‍💻 Licença

---

**GNU General Public License v3.0**

Veja o arquivo License para mais detalhes.

---

## 🦊 Raposa-Dev 🦊