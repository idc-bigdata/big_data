# coding=utf-8

import csv
import argparse
from pygeocoder import Geocoder

__author__ = 'SagiK'

# csv writer
csvfile_new = open('/Users/sagi/source/big_data/Group6/datasets/geodata.csv', 'wb')
writer = csv.writer(csvfile_new)

# args parser
parser = argparse.ArgumentParser(description='')
parser.add_argument('api_key', type=str, help='Google API_KEY')
args = parser.parse_args()

# geocoder init
gc = Geocoder(api_key=args.api_key)

# Creating sets of poverty degree per neighbourhood
pov_0 = ('Santa Helena','Jesus de Nazareth','Ilha do Boi','Barro Vermelho', 'Praia do Canto','Ilha do Frade',
         'Santa Luiza','Santa Lúcia','Ilha Bela')

pov_1 = ('Vila Rubim','Centro','Jardim da Penha','Parque Moscoso','Mata da Praia','Enseada do Suá',
         'Morada de Camburi','Antônio Honório','Horto','Jabour')

pov_2 = ('Boa Vista','Monte Belo','Aeroporto','Parque Industrial','Santa Clara',
         'Jardim Camburi','Bento Ferreira','Praia do Suá','Joana Darc')

pov_3 = ('Do Cabral','Solon Borges','De Lourdes','Ilha das Caieiras','Tabuazeiro','Goiabeiras',
         'Andorinhas','Cruzamento','Ariovaldo Favalessa','Fradinhos','Fonte Grande','Nazareth','Jucutuquara',
         'Moscoso','Ilha de Santa Maria','Resistência','República','Maruípe', 'Universitário')

pov_4 = ('Caratoíra','Maria Ortiz','Santa Tereza','Conquista','Do Quadro',
         'Santa Martha','Nova Palestina','Bonfim','Da Penha','Bela Vista','Pontal de Camburi','Comdusa',
         'Segurança do Lar','Itararé','Grande Vitória','Consolação', 'Santa Cecília','São Cristovão',
         'Romão','São José','São Pedro','Redenção')

pov_5 = ('São Benedito','Santos Reis','Piedade','Santos Dumont','Estrelinha','Mário Cypreste',
         'Santo Antônio','Inhanguetá','Forte São João','Santo André',
         'Ilha do Príncipe','Ilha de Trindade','Gurigica')

# Creating dict of neighbourhood per region ID
regions = {"1": ['Centro','Santa Clara','Vila Rubim','Moscoso','Forte São João','Fonte Grande','Piedade',
                 'Parque Moscoso'],
           "2": ['Do Quadro','Santo Antônio','Ariovaldo Favalessa','Ilha do Príncipe','Mário Cypreste','Santa Tereza',
                 'Caratoíra','Bela Vista','Estrelinha','Grande Vitória','Inhanguetá','Do Cabral','Universitário'],
           "3": ['De Lourdes', 'Fradinhos', 'Horto', 'Jucutuquara', 'Nazareth', 'Consolação', 'Ilha de Santa Maria',
                 'Monte Belo', 'Cruzamento', 'Romão', 'Jesus de Nazareth', 'Gurigica', 'Bento Ferreira'],
           "4": ['Maruípe', 'Joana Darc', 'São Cristovão', 'Tabuazeiro', 'Andorinhas', 'Itararé', 'Santa Martha',
                 'Santos Dumont', 'Bonfim', 'Da Penha', 'São Benedito', 'Santa Cecília',],
           "5": ['Ilha do Frade', 'Ilha Bela', 'Praia do Canto', 'Barro Vermelho', 'Santa Lúcia', 'Enseada do Suá',
                 'Santa Luiza', 'Praia do Suá', 'Santa Helena'],
           "6": ['Jardim da Penha', 'Morada de Camburi', 'Jabour', 'Pontal de Camburi', 'República', 'Antônio Honório',
                 'Segurança do Lar', 'Boa Vista', 'Solon Borges', 'Aeroporto', 'Goiabeiras', 'Maria Ortiz', 'Mata da Praia'],
           "7": ['São Pedro','Santo André','São José','Redenção','Resistência','Nova Palestina','Santos Reis',
                 'Ilha das Caieiras','Conquista','Comdusa'],
           "8": ['Jardim Camburi'],
           "9": ['Ilha de Trindade']}

pov = None  # poverty indicator
headers = ['region', 'neighbourhood', 'poverty', 'x_coor', 'y_coor']
writer.writerow(headers)

for region_id, values in regions.iteritems():
    for neigh in values:
        print "Working on '{}'\n".format(neigh)
        if neigh in pov_0:
            pov = 0
        elif neigh in pov_1:
            pov = 1
        elif neigh in pov_2:
            pov = 2
        elif neigh in pov_3:
            pov = 3
        elif neigh in pov_4:
            pov = 4
        elif neigh in pov_5:
            pov = 5
        else:
            pov = 'Na'
        try:
            res = gc.geocode("{}, vitoria, brazil".format(neigh))
        except Exception:
            print "FAILED - Try to look for {} coordinates manually!\n".format(neigh)
        coordinates = res.coordinates
        writer.writerow([region_id, "u'{}'".format(neigh), pov, coordinates[0], coordinates[1]])

csvfile_new.close()
