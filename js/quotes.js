const quotes = [
{
    quote:"단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
},
{
    quote: "포기하면 그 순간이 시합 종료에요",
},
{
    quote: "재능은 꽃피우는것 센스는 갈고닦는것",
},
{
    quote: "흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야한다.",
},
{
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오",
},
{
    quote: "최고에 도달하려면 최저에서 시작하라",
},
{
    quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
},
{
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
},
{
    quote: "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다.우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다.",
},
{
    quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다",
},
{
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
},
];

const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;