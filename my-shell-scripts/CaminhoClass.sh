#!/bin/bash

# echo "Informe o caminho do que você quer a classificação"
 CAMINHO=$1
 CONTEUDO=$(ls -l $CAMINHO| wc -l)
 if [ -e $CAMINHO ]
 then 
    echo "Este caminho esxite!";sleep 1;echo "Proseguindo com a Classificação!" ; echo .;sleep 1; echo .;sleep 1; echo .;sleep 1;
        if [ -f $CAMINHO ]
        then 
            echo "Você me informou o caminho de um arquivo comum"
        elif [ -d $CAMINHO ]
        then
            echo "Você me informou o caminho de uma pasta"
        else 
            echo "Não é um arquivo ou pasta!"
        fi
else 
    echo "Verifique se há algum erro de escrita, este caminho não existe"
fi
sleep 1;echo "Proseguindo a verificação de conteúdo!" ; echo .;sleep 1; echo .;sleep 1; echo .;sleep 1;
echo "A pasta do caminho: $CAMINHO ,tem $CONTEUDO arquivos."
#./CaminhoClass.sh /home/bruna/Vídeos/Webcam/2020-07-02-175320.webm