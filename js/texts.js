var app = angular.module('myHomePage', ['ngCookies']);

var pt = {
    lang: ['English', 'Português'],
    navbar: ['Sobre Mim', 'Interesses', 'Contato'],
    lifeEvents: ['Bacharelado em Ciência da Computação - UTFPR', 'Mestrado em Ciência da Computação - Unicamp', 'Estágio de Pesquisa - Universidade de Waterloo, Canada', 'Doutorado em Ciência da Computação - Unicamp'],
    interestsTitle: 'Interesses',
    interestsPhrase: 'Por que escolher entre teoria e prática se posso conviver com as duas?',
    interestsTitles: ['Yeah, Science!!!', 'Desenvolvimento de Software'],
    interestsTexts: [
        'Atualmente minha área de pesquisa está concentrada no desenvolvimento de novos mecanismos para o aumento da confiabilidade de redes 5G. Mais especificamente, o gerenciamento de dinâmico de fatias virtuais de rede (dynamic end-to-end network slicing) para usuários com multiplas demandas.',
        'Como desenvolvedor back end, possuo interesse em gerência de recursos de grandes sistemas, seja utilizando recursos locais ou projetando sistemas para usufruir de recursos externos. Possuo experiência com administração de sistemas Linux e Windows, gerência de banco de dados Oracle e suporte em infraestrutura de redes. Como desenvolvedor, possuo experiência em desenvovimento desktop utilizando Java e banco de dados Oracle.'
    ],
    interestsItens: ['Gerência de recursos', 'Cloud Computing', 'Fog Computing', 'Internet das Coisas', 'Redes Veiculares', 'Redes de Malha sem Fio'],
    contact: ['Me Contate', 'Deixe uma mensagem', 'Assunto', 'Mensagem', 'Enviar'],
    quotes: ['Na teoria, não há diferença entre teoria e prática. Na prática, há.', 'Ciência da Computação está tão relacionada aos computadores quanto a Astronomia aos telescópios, Biologia aos microscópios, ou Química aos tubos de ensaio. A Ciência não estuda ferramentas. Ela estuda como nós as utilizamos, e o que descobrimos com elas.']
}

var en = {
    lang: ['English', 'Português'],
    navbar: ['About me', 'Interests', 'Contact'],    
    lifeEvents: ['Computer Science - UTFPR', 'M.Sc. in Computer Science - University of Campinas', 'Research Student - University of Waterloo, Canada', 'Ph.D. in Computer Science - University of Campinas'],
    interestsTitle: 'Interests',
    interestsPhrase: 'Theory and practice should live together. We can enjoy both.',
    interestsTitles: ['Yeah, Science!!!', 'Software Development'],
    interestsTexts: [
         'My current research area is focused on the development of new mechanisms for end-to-end network slicing. In such context, I aim to improve the reliability of 5G networks to serve users with different, and sometime confidants, requirements.',
         'As a back end developer, I have an interest in resource management in scalable systems, whether using local resources or designing systems to use external resources. I have experience with Linux and Windows systems administration, Oracle database management, and network infrastructure support. As a developer, I have experience in desktop development using Java and Oracle technologies.'
    ],
    contact: ['Contact Me', 'Leave a message', 'Subject', 'Message', 'Send'],
    quotes: ['In theory there is no difference between theory and practice; in practice there is.',
        'Computer science is no more about computers than astronomy is about telescopes, biology is about microscopes or chemistry is about beakers and test tubes. Science is not about tools, it is about how we use them and what we find out when we do.']
}

function language(lang, scope){    
    if(lang === 'pt_BR'){
        scope.text = pt;
        scope.currentLang = 'pt_BR';
        $("#en_US").insertAfter("#pt_BR");
    }
    else{
        scope.text = en;
        scope.currentLang = 'en_US';
        $("#pt_BR").insertAfter("#en_US");
    }
}

app.controller('textCtr', ['$scope', '$cookies', function($scope, $cookies) {
    $scope.changeLang = function(lang){        
        language(lang, $scope);
        $cookies.put('lang', lang);
    };

    angular.element(document).ready(function () {
        var lang = $cookies.get('lang');        

        if(!lang)
            lang = window.navigator.userLanguage || window.navigator.language;

        if(lang.indexOf('pt') > -1)        
            language('pt_BR', $scope); 
        else
            language('en_US', $scope);

        $scope.$digest();
    });          
}]);
