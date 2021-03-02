# A cascata (cascading)

A escolha do browser de qual reagra aplicar, caso haja muitas regras para o mesmo elemeto.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância


### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selecctor, combinators e negation pseudo-class (:not())
1. Element type selector, combinators e negation pseudo-class (::before, ::after)
10. Classes a attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### A regra !important
* cuidado, evite o uso
* não é considerada uma boa prática
* quebra o fluxo natural da cascata