#!/bin/bash

TAREFAS="viajar beber sair trabalar"
echo "Qual sua idade?"
read IDADE

if [ $IDADE -ge 18 ] && [ $IDADE -lt 75 ]
then
    echo "vc já é maior de idade!"
    for COISAS in $TAREFAS
        do 
            echo "Agora vc já pode $COISAS se preocupar!"
        done
elif [ $IDADE -ge 75 ]
then 
    echo "vá se cuidar e parar de danação!"
else
    echo "pare de querer o que não pode"
fi
