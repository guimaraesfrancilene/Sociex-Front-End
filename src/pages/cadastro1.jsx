<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOCIEX - Cadastro de Empresa</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Reset de estilos básicos */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Baloo 2', cursive, sans-serif;
        }

        body {
            min-height: 100vh;
            background-color: #590623;
        }

        /* Container principal dividido em dois lados */
        .container {
            display: flex;
            min-height: 100vh;
            width: 100%;
        }

        /* LADO ESQUERDO: Logo, Nome e Slogan */
        .left-side {
            flex: 1;
            background-color: #FAF1D6; /* Fundo bege claro */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            text-align: center;
        }

        .logo-container {
            margin-bottom: 10px;
        }

        .logo-img {
            max-width: 240px;
            height: auto;
            object-fit: contain;
        }

        .brand-name {
            color: #590623; /* Tom de vinho escuro */
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: 1px;
            margin-bottom: 10px;
            line-height: 1;
        }

        .tagline {
            color: #000000;
            font-size: 1.5rem;
            font-weight: 700;
            max-width: 320px;
            line-height: 1.3;
        }

        /* LADO DIREITO: Formulário de Cadastro */
        .right-side {
            flex: 1;
            background-color: #590623; /* Fundo Vinho */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
        }

        .page-title {
            color: #ffffff;
            font-size: 2.4rem;
            font-weight: 500;
            margin-bottom: 20px;
        }

        /* Card interno bege */
        .form-card {
            background-color: #FAF1D6;
            border-radius: 18px;
            padding: 30px 40px;
            width: 100%;
            max-width: 480px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .form-subtitle {
            color: #D27828; /* Cor alaranjada do subtítulo */
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 16px;
            text-align: left; /* Alinha os labels à esquerda dentro do card */
        }

        .form-label {
            display: block;
            color: #590623;
            font-weight: 700;
            font-size: 1.05rem;
            margin-bottom: 2px;
        }

        /* Container para alinhar os ícones da senha */
        .input-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-container i {
            position: absolute;
            color: #a0a0a0;
            font-size: 1.1rem;
        }

        .input-container i.left-icon {
            left: 14px;
        }

        .input-container i.right-icon {
            right: 14px;
            cursor: pointer;
        }

        .form-input {
            width: 100%;
            padding: 8px 14px;
            border: 1px solid #CCCCCC;
            border-radius: 8px;
            font-size: 1.05rem;
            color: #333333;
            background-color: #FFFFFF;
            outline: none;
            transition: border-color 0.2s;
        }

        .form-input::placeholder {
            color: #A6A6A6;
        }

        .has-icon-left {
            padding-left: 42px;
        }

        .form-input:focus {
            border-color: #590623;
            box-shadow: 0 0 0 1px #590623;
        }

        /* Botão Cadastrar interno do Card */
        .btn-submit {
            width: 100%;
            background-color: #590623;
            color: #ffffff;
            border: none;
            padding: 10px;
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 10px;
            margin-bottom: 15px;
            transition: background-color 0.2s;
        }

        .btn-submit:hover {
            background-color: #420419;
        }

        /* Link de Login no rodapé do card */
        .login-footer {
            color: #590623;
            font-size: 1.05rem;
            font-weight: 700;
        }

        .login-link {
            color: #D27828;
            text-decoration: none;
            transition: color 0.2s;
        }

        .login-link:hover {
            color: #b5621b;
            text-decoration: underline;
        }

        /* Responsividade para telas menores (Celulares) */
        @media (max-width: 820px) {
            .container {
                flex-direction: column;
            }
            .left-side {
                padding: 50px 20px 30px 20px;
            }
            .right-side {
                padding: 20px 20px 50px 20px;
            }
            .brand-name {
                font-size: 2.8rem;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        
        <div class="left-side">
            <div class="logo-container">
                <img src="c:\Users\lilia rocha\Downloads\logo.png" alt="Logo SOCIEX" class="logo-img">
            </div>
            <h1 class="brand-name">SOCIEX</h1>
            <p class="tagline">Faça do seu problema uma oportunidade!</p>
        </div>

        <div class="right-side">
            <h2 class="page-title">Cadastrar uma conta</h2>
            
            <div class="form-card">
                <p class="form-subtitle">Preencha os campos abaixo e crie uma nova conta</p>
                
                <form>
                    <div class="form-group">
                        <label class="form-label">Informe nome da empresa</label>
                        <input type="text" class="form-input" placeholder="Nome da Empresa" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Informe o CNPJ</label>
                        <input type="text" class="form-input" placeholder="00.000.000/0000-00" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Informe área de atuação</label>
                        <input type="text" class="form-input" placeholder="Área de atuação" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Informe telefone</label>
                        <input type="tel" class="form-input" placeholder="Telefone" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Informe uma senha</label>
                        <div class="input-container">
                            <i class="fa-solid fa-lock left-icon"></i>
                            <input type="password" class="form-input has-icon-left" placeholder="Senha" required>
                            <i class="fa-regular fa-eye-slash right-icon"></i>
                        </div>
                    </div>

                    <button type="submit" class="btn-submit">Cadastrar</button>
                </form>

                <p class="login-footer">Já possui uma conta? <a href="#" class="login-link">Faça Login</a></p>
            </div>
        </div>

    </div>

</body>
</html>