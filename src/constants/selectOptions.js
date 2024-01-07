// 二元运算符
export const BinaryOperator = [
    {
        label: '加减±',
        value: '\\pm',
    },
    {
        label: '乘×',
        value: '\\times',
    },
    {
        label: '交集∩',
        value: '\\cap',
    },
    {
        label: '并集∪',
        value: '\\cup',
    },
    {
        label: '逻辑或∨',
        value: '\\vee',
    },
    {
        label: '逻辑与∧',
        value: '\\wedge',
    },
    {
        label: '集合A减B',
        value: 'A\\setminus B',
    },
    {
        label: '除 ÷',
        value: '\\div',
    },
    {
        label: '减加∓',
        value: '\\mp',
    },
    {
        label: '大交集⋂',
        value: '\\bigcap',
    },
    {
        label: '大并集⋃',
        value: '\\bigcup',
    },
    {
        label: '大号逻辑或',
        value: '\\bigvee',
    },
    {
        label: '大号逻辑与',
        value: '\\bigwedge',
    },
]

// 二元关系符
export const BinaryRelations = [
    {
        label: '小于 <',
        value: '\\lt',
    },
    {
        label: '大于 >',
        value: '\\gt',
    },
    {
        label: '远小于 ≪',
        value: '\\ll',
    },
    {
        label: '远大于 ≫',
        value: '\\gg',
    },
    {
        label: '小等 ≤',
        value: '\\leq',
    },
    {
        label: '大等 ≥',
        value: '\\geq',
    },
    {
        label: '不等',
        value: '\\neq',
    },
    {
        label: '恒等',
        value: '\\equiv',
    },
    {
        label: '属于',
        value: '\\in',
    },
    {
        label: '不属于',
        value: '\\notin',
    },
    {
        label: '包含于',
        value: '\\subset',
    },
    {
        label: '包含',
        value: '\\supset',
    },
    {
        label: '真包含于',
        value: '\\subseteq',
    },
    {
        label: '真包含',
        value: '\\supseteq',
    },
]

// 大型运算符
export const BigOperator = [
    {
        label: '求和',
        value: '\\sum_{i=0}^n',
    },
    {
        label: '连乘',
        value: '\\prod_{i=0}^n',
    },
    {
        label: '积分',
        value: '\\int_{a}^{b}',
    },
    {
        label: '二重积分',
        value: '\\iint',
    },
    {
        label: '开根',
        value: '\\sqrt[b]{a}',
    },
    {
        label: 'log函数',
        value: '\\log_{a}{b}',
    },
    {
        label: '分数',
        value: '\\frac{1}{2}',
    },
    {
        label: '绝对值',
        value: '\\vert X \\vert',
    },
    {
        label: '组合1',
        value: '\\binom{n}{k}',
    },
    {
        label: '组合2',
        value: 'C_n^k',
    },
    {
        label: '⨀',
        value: '\\bigodot',
    },
    {
        label: '⨂',
        value: '\\bigotimes',
    },
    {
        label: '⨁',
        value: '\\bigoplus',
    },
    {
        label: '⨄',
        value: '\\biguplus',
    },
    {
        label: '∏',
        value: '\\prod',
    },
    {
        label: '∐',
        value: '\\coprod',
    },
    {
        label: '∮',
        value: '\\oint',
    },
    {
        label: '⨆',
        value: '\\bigsqcup',
    },
]

// 其他符号
export const others = [
    {
        label: '点 ⋅',
        value: '\\cdot',
    },
    {
        label: '星号 ∗',
        value: '\\ast',
    },
    {
        label: '小星星 ⋆',
        value: '\\star',
    },
    {
        label: '小钻石 ⋄',
        value: '\\diamond',
    },
]

// 希腊字母
export const Greek = [
    {
        label: 'α',
        value: '\\alpha',
    },
    {
        label: 'β',
        value: '\\beta',
    },
    {
        label: 'γ',
        value: '\\gamma',
    },
    {
        label: 'π',
        value: '\\pi',
    },
    {
        label: 'ω',
        value: '\\omega',
    },
    {
        label: 'δ',
        value: '\\delta',
    },
    {
        label: 'μ',
        value: '\\mu',
    },
    {
        label: 'λ',
        value: '\\lambda',
    },
    {
        label: 'ξ',
        value: '\\xi',
    },
    {
        label: 'ψ',
        value: '\\psi',
    },
    {
        label: 'ε',
        value: '\\varepsilon',
    },
    {
        label: 'φ',
        value: '\\varphi',
    },
    {
        label: 'θ',
        value: '\\theta',
    },
    {
        label: 'ι',
        value: '\\iota',
    },
    {
        label: 'ν',
        value: '\\nu',
    },
    {
        label: 'ο',
        value: '\\omicron',
    },
    {
        label: 'ρ',
        value: '\\rho',
    },
    {
        label: 'σ',
        value: '\\sigma',
    },
    {
        label: 'τ',
        value: '\\tau',
    },
    {
        label: 'χ',
        value: '\\chi',
    },
    {
        label: 'υ',
        value: '\\upsilon',
    },
    {
        label: 'ζ',
        value: '\\zeta',
    },
    {
        label: 'η',
        value: '\\eta',
    },
    {
        label: 'κ',
        value: '\\kappa',
    },
]

// 花体字
export const FlowerFont = [
    {
        label: 'Blackboard bold',
        value: '\\mathbb{Aa,Rr,Kk}',
    },
    {
        label: 'Blackboard Bold',
        value: '\\Bbb{Aa,Rr,Kk}',
    },
    {
        label: 'boardface',
        value: '\\mathbf{Aa,Rr,Kk}',
    },
    {
        label: 'typewriter',
        value: '\\mathtt{Aa,Rr,Kk}',
    },
    {
        label: 'roman font',
        value: '\\mathrm{Aa,Rr,Kk}',
    },
    {
        label: 'calligraphic',
        value: '\\mathcal{Aa,Rr,Kk}',
    },
    {
        label: 'script letters',
        value: '\\mathscrAa,Rr,Kk}',
    },
    {
        label: 'san-serif',
        value: '\\mathsf{Aa,Rr,Kk}',
    },
]

// 箭头
export const Arrows =[
    {
        label: '←',
        value: '\\gets',
    },
    {
        label: '→',
        value: '\\to',
    },
    {
        label: '⇐',
        value: '\\Leftarrow',
    },
    {
        label: '⇒',
        value: '\\Rightarrow',
    },
    {
        label: '↔',
        value: '\\leftrightarrow',
    },
    {
        label: '⇔',
        value: '\\Leftrightarrow',
    },
    {
        label: '↦',
        value: '\\mapsto',
    },
    {
        label: '↩',
        value: '\\hookleftarrow',
    },
    {
        label: '↼',
        value: '\\leftharpoonup',
    },
    {
        label: '↽',
        value: '\\leftharpoondown',
    },
    {
        label: '⇌',
        value: '\\rightleftharpoons',
    },
    {
        label: '↑',
        value: '\\uparrow',
    },
    {
        label: '⇝',
        value: '\\leadsto',
    },
    {
        label: '↕',
        value: '\\updownarrow',
    },
    {
        label: '↗',
        value: '\\nearrow',
    },
    {
        label: '↘',
        value: '\\searrow',
    },
    {
        label: '↙',
        value: '\\swarrow',
    },
    {
        label: '↖',
        value: '\\nwarrow',
    },
]