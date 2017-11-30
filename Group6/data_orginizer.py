import csv

with open('/Users/sagi/source/big_data/Group6/KaggleV2-May-2016.csv', 'rb') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    csvfile_new = open('/Users/sagi/Dropbox/MBA 2017/Data Analytics for Business/DataSet/KaggleV2-May-2016 - with poverty.csv', 'wb')
    writer = csv.writer(csvfile_new)

    # Creating sets of poverty degree per neighbourhood
    pov_0 = ('SANTA HELENA','JESUS DE NAZARETH','ILHA DO BOI','BARRO VERMELHO',
    'PRAIA DO CANTO','ILHA DO FRADE','SANTA LU\xcc\x8dZA','SANTA L\xcc_CIA')
    pov_1 = ('VILA RUBIM','CENTRO','JARDIM DA PENHA','PARQUE MOSCOSO','MATA DA PRAIA',
    'ENSEADA DO SU\xcc\x81','MORADA DE CAMBURI','ANT\xcc\xd3NIO HON\xcc\xd2RIO','HORTO',
    'JABOUR')
    pov_2 = ('BOA VISTA','MONTE BELO','AEROPORTO','PARQUE INDUSTRIAL','SANTA CLARA',
    'JARDIM CAMBURI','BENTO FERREIRA','PRAIA DO SU\xcc\x81','JOANA D\xe5\xabARC')
    pov_3 = ('DO CABRAL','SOLON BORGES','DE LOURDES','ILHA DAS CAIEIRAS','TABUAZEIRO','GOIABEIRAS',
    'ANDORINHAS','CRUZAMENTO','ARIOVALDO FAVALESSA','FRADINHOS','FONTE GRANDE','NAZARETH','JUCUTUQUARA',
    'DO MOSCOSO','ILHA DE SANTA MARIA','RESIST\xcc_NCIA','REP\xcc_BLICA','MARU\xcc\x8dPE', 'UNIVERSIT\xcc\x81RIO')
    pov_4 = ('CARATO\xcc\x8dRA','MARIA ORTIZ','SANTA TEREZA','CONQUISTA','DO QUADRO',
    'SANTA MARTHA','NOVA PALESTINA','BONFIM','DA PENHA','BELA VISTA','PONTAL DE CAMBURI','COMDUSA',
    'SEGURAN\xcc\xe0A DO LAR','ITARAR\xcc\xe4','GRANDE VIT\xcc\xd2RIA','CONSOLA\xcc\xe0\xcc\xc4O',
    'SANTA CEC\xcc\x8dLIA','S\xcc\xc4O CRIST\xcc\xd2V\xcc\xc4O','ROM\xcc\xc4O','S\xcc\xc4O JOS\xcc\xe4',
    'S\xcc\xc4O PEDRO','REDEN\xcc\xe0\xcc\xc4O')
    pov_5 = ('S\xcc\xc4O BENEDITO','SANTOS REIS','PIEDADE','SANTOS DUMONT','ESTRELINHA'
    ,'M\xcc\x81RIO CYPRESTE','SANTO ANT\xcc\xd3NIO','INHANGUET\xcc\x81',
    'FORTE S\xcc\xc4O JO\xcc\xc4O','SANTO ANDR\xcc\xe4','ILHA DO PR\xcc\x8dNCIPE',
    'ILHAS OCE\xcc\xe2NICAS DE TRINDADE','GURIGICA')

    # writing a a new row with new poverty attribute
    for row in reader:
        if row[6] in pov_0:
            newline = row[:7]+["0"]+row[8:]
            writer.writerow(newline)
        elif row[6] in pov_1:
            newline = row[:7]+["1"]+row[8:]
            writer.writerow(newline)
        elif row[6] in pov_2:
            newline = row[:7]+["2"]+row[8:]
            writer.writerow(newline)
        elif row[6] in pov_3:
            newline = row[:7]+["3"]+row[8:]
            writer.writerow(newline)
        elif row[6] in pov_4:
            newline = row[:7]+["4"]+row[8:]
            writer.writerow(newline)
        elif row[6] in pov_5:
            newline = row[:7]+["5"]+row[8:]
            writer.writerow(newline)
        else:
            writer.writerow(row)

    csvfile_new.close()
csvfile.close()
