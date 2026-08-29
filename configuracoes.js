/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton = document.querySelector("#menuButton");

const sidebar = document.querySelector(".sidebar");


menuButton.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});



/* =====================================================
   MENU DO PERFIL
===================================================== */

const profileButton = document.querySelector("#profileButton");

const profileContainer = document.querySelector(".profile-container");


profileButton.addEventListener("click", (event) => {

    event.stopPropagation();

    profileContainer.classList.toggle("open");

});



/* =====================================================
   FECHAR MENU DO PERFIL
===================================================== */

document.addEventListener("click", (event) => {

    if (!profileContainer.contains(event.target)) {

        profileContainer.classList.remove("open");

    }

});



/* =====================================================
   MENU DAS CONFIGURAÇÕES
===================================================== */

const settingsMenuItems = document.querySelectorAll(".settings-menu-item");

const settingsSections = document.querySelectorAll(".settings-section");


settingsMenuItems.forEach(item => {

    item.addEventListener("click", () => {


        /* REMOVE ATIVO DO MENU */

        settingsMenuItems.forEach(menuItem => {

            menuItem.classList.remove("active");

        });


        /* ADICIONA ATIVO NO ITEM CLICADO */

        item.classList.add("active");


        /* PEGA O NOME DA SEÇÃO */

        const sectionName = item.dataset.section;


        /* ESCONDE TODAS AS SEÇÕES */

        settingsSections.forEach(section => {

            section.classList.remove("active");

        });


        /* MOSTRA A SEÇÃO CORRETA */

        const selectedSection =
            document.querySelector(`#${sectionName}`);


        selectedSection.classList.add("active");


        /* VOLTA PARA O TOPO */

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        /* FECHA MENU MOBILE */

        if (window.innerWidth <= 900) {

            sidebar.classList.remove("open");

        }


    });

});



/* =====================================================
   TEMA
===================================================== */

const themeButtons = document.querySelectorAll(".theme-option");


themeButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* REMOVE SELEÇÃO */

        themeButtons.forEach(theme => {

            theme.classList.remove("active-theme");

        });


        /* ADICIONA NO TEMA ESCOLHIDO */

        button.classList.add("active-theme");


        /* PEGA O TEMA */

        const selectedTheme = button.dataset.theme;


        /* TEMA CLARO */

        if (selectedTheme === "light") {

            document.body.classList.remove("dark-mode");

        }


        /* TEMA ESCURO */

        if (selectedTheme === "dark") {

            document.body.classList.add("dark-mode");

        }


        /* TEMA DO SISTEMA */

        if (selectedTheme === "system") {

            if (
                window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches
            ) {

                document.body.classList.add("dark-mode");

            }

            else {

                document.body.classList.remove("dark-mode");

            }

        }


    });

});



/* =====================================================
   BOTÕES DE SALVAR
===================================================== */

const saveButtons = document.querySelectorAll(".save-button");


saveButtons.forEach(button => {

    button.addEventListener("click", () => {


        const originalText = button.innerHTML;


        button.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Salvo com sucesso!
        `;


        button.style.background = "#16a34a";


        setTimeout(() => {

            button.innerHTML = originalText;

            button.style.background = "";

        }, 2000);


    });

});



/* =====================================================
   EXCLUIR CONTA
===================================================== */

const deleteButton = document.querySelector(".delete-button");


deleteButton.addEventListener("click", () => {

    const confirmation = confirm(

        "Tem certeza que deseja excluir sua conta? Esta ação não poderá ser desfeita."

    );


    if (confirmation) {

        alert(

            "Solicitação de exclusão da conta enviada."

        );

    }

});