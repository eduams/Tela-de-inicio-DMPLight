# Tela-de-inicio-DMPLight
Uma tela criada para o Departamento Regional de Saúde XVI, que, antes do usuário entrar no sistema de pontos DMPLight, confirma se o usuário está no modo IE do Edge ou não.

O DMPLight é uma aplicação XBAP ainda muito utilizada na rede pública e só é capaz de rodar no modo Internet Explorer do Edge. Caso o usuário tente entrar no endereço do DMPLight na rede sem o modo IE ligado, o navegador irá tentar fazer o download de um arquivo .xbap ao invés de entrar no sistema. 

Essa tela de início faz com que o usuário possa clicar no botão de ativação do modo IE do Edge antes de tentar entrar no DMPLight e, caso esteja com o modo IE desligado, será impedido de entrar e avisado de que o modo IE está desativado. Sem a tela de início, não seria possível usar o botão de ativação do modo IE (pois ele não conseguiria sequer entrar no sistema do DMPLight).
