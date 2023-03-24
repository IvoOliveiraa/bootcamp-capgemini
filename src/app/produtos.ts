export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Gamer Razer Deathadder Essential", preco: 299.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 100 },
    { id: 2, descricao: "monitor gamer 144hz ultrawide", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 100  },
    { id: 3, descricao: "Teclado Mecânico Gamer HyperX", preco: 549.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 100  },
    { id: 4, descricao: "Headset Gamer HyperX Cloud Alpha", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 100  },
    { id: 5, descricao: "Headphone Jbl Tune 710", preco: 349.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 100  },
    { id: 6, descricao: "Headset Gamer HyperX Revolver", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 100  },
    { id: 7, descricao: "SSD Crucial, 1TB, Leitura: 3500MB", preco: 551.12, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 100  },
    { id: 8, descricao: "RTX 3090 Trinity Zotac, 24GB", preco: 16999.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 100  },
    { id: 9, descricao: "AMD Ryzen 7 5700G, 4.6GHz Max Turbo", preco: 1441.93, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 100  },
    { id: 10, descricao: "Notebook Acer Intel Core i3 4GB 256GB", preco: 2718.90    , descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque:100  },
    { id: 11, descricao: "Notebook Acer Predator Helios 300", preco: 10990.00, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 100  },
    { id: 12, descricao: "Mouse óptico Logitech Basic", preco: 85, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.jpg", quantidadeEstoque: 100  },
    { id: 13, descricao: "Mouse Gamer HyperX Pulsefire Raid RGB", preco: 299, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 100  },
    { id: 14, descricao: "Mouse Optico Pequeno USB Padrão", preco: 22, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 100  },
    { id: 15, descricao: "Cadeira DT3 Royce Tecido", preco: 2456.91, descricaoPreco: "À vista no PIX", imagem: "./assets/cadeira.jpg", quantidadeEstoque: 100  },
    { id: 16, descricao: "Teclado Mecânico Gamer Husky Blizzard", preco: 279.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 100  },
    { id: 17, descricao: "Echo Dot (4ª Geração) Cor Preta", preco: 379.05, descricaoPreco: "À vista no PIX", imagem: "./assets/echo-dot.jpg", quantidadeEstoque: 100  },
    { id: 18, descricao: "Console Sony Playstation 5", preco: 3799.99, descricaoPreco: "À vista no PIX", imagem: "./assets/ps5.jpg", quantidadeEstoque: 100  },
]   