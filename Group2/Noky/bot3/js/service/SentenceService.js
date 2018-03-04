var SentenceService = function () {
	this.words = {
		nouns: ['people', 'history', 'way', 'art', 'world', 'information', 'map', 'family', 'government', 'health', 'system', 'computer', 'meat', 'year', 'music', 'person', 'reading', 'method', 'data', 'food', 'understanding', 'theory', 'law', 'bird', 'literature', 'problem', 'software', 'control', 'knowledge', 'power', 'ability', 'economics', 'love', 'internet', 'television', 'science', 'library', 'nature', 'fact', 'product', 'idea', 'temperature', 'investment', 'area', 'society', 'activity', 'story', 'industry', 'media', 'thing', 'oven', 'community', 'definition', 'safety', 'quality', 'development', 'language', 'management', 'player', 'variety', 'video', 'week', 'security', 'country', 'exam', 'movie', 'organization', 'equipment', 'physics', 'analysis', 'policy', 'series', 'thought', 'basis', 'boyfriend', 'direction', 'strategy', 'technology', 'army', 'camera', 'freedom', 'paper', 'environment', 'child', 'month', 'truth', 'marketing', 'university', 'writing', 'article', 'department', 'difference', 'goal', 'news', 'audience', 'fishing', 'growth', 'income', 'marriage', 'user', 'combination', 'failure', 'meaning', 'medicine', 'philosophy', 'teacher', 'communication', 'night', 'chemistry', 'disease', 'disk', 'energy', 'nation', 'road', 'role', 'soup', 'advertising', 'location', 'success', 'addition', 'apartment', 'education', 'math', 'moment', 'painting', 'politics', 'attention', 'decision', 'event', 'property', 'shopping', 'student', 'wood', 'competition', 'distribution', 'entertainment', 'office', 'population', 'president', 'unit', 'category', 'cigarette', 'context', 'introduction', 'opportunity', 'driver', 'flight', 'length', 'magazine', 'newspaper', 'relationship', 'teaching', 'cell', 'dealer', 'finding', 'lake', 'member', 'message', 'phone', 'scene', 'association', 'concept', 'customer', 'death', 'discussion', 'housing', 'inflation', 'mood', 'woman', 'advice', 'blood', 'effort', 'expression', 'opinion', 'payment', 'reality', 'responsibility', 'situation', 'skill', 'statement', 'wealth', 'application', 'city', 'county', 'depth', 'estate', 'foundation', 'grandmother', 'heart', 'perspective', 'photo', 'recipe', 'studio', 'topic', 'collection', 'depression', 'imagination', 'passion', 'percentage', 'resource', 'setting', 'ad', 'agency', 'college', 'connection', 'criticism', 'debt', 'description', 'memory', 'patience', 'secretary', 'solution', 'administration', 'aspect', 'attitude', 'director', 'personality', 'psychology', 'recommendation', 'response', 'selection', 'storage', 'version', 'alcohol', 'argument', 'complaint', 'contract', 'emphasis', 'highway', 'loss', 'membership', 'possession', 'preparation', 'steak', 'union', 'agreement', 'currency', 'employment', 'entry', 'interaction', 'mixture', 'preference', 'region', 'republic', 'tradition', 'virus', 'actor', 'classroom', 'delivery', 'device', 'difficulty', 'drama', 'election', 'engine', 'football', 'hotel', 'owner', 'priority', 'protection', 'suggestion', 'tension', 'variation', 'anxiety', 'atmosphere', 'awareness', 'bath', 'bread', 'candidate', 'climate', 'comparison', 'confusion', 'construction', 'elevator', 'emotion', 'employee', 'employer', 'guest', 'height', 'leadership', 'mall', 'manager', 'operation', 'recording', 'sample', 'transportation', 'charity', 'cousin', 'disaster', 'editor', 'efficiency', 'excitement', 'extent', 'feedback', 'guitar', 'homework', 'leader', 'mom', 'outcome', 'permission', 'presentation', 'promotion', 'reflection', 'refrigerator', 'resolution', 'revenue', 'session', 'singer', 'tennis', 'basket', 'bonus', 'cabinet', 'childhood', 'church', 'clothes', 'coffee', 'dinner', 'drawing', 'hair', 'hearing', 'initiative', 'judgment', 'lab', 'measurement', 'mode', 'mud', 'orange', 'poetry', 'police', 'possibility', 'procedure', 'queen', 'ratio', 'relation', 'restaurant', 'satisfaction', 'sector', 'signature', 'song', 'tooth', 'town', 'vehicle', 'volume', 'wife', 'accident', 'airport', 'appointment', 'arrival', 'assumption', 'baseball', 'chapter', 'committee', 'conversation', 'database', 'enthusiasm', 'error', 'explanation', 'farmer', 'gate', 'girl', 'hall', 'historian', 'hospital', 'injury', 'instruction', 'manufacturer', 'meal', 'perception', 'pie', 'poem', 'presence', 'proposal', 'reception', 'replacement', 'revolution', 'river', 'son', 'speech', 'tea', 'village', 'warning', 'winner', 'worker', 'writer', 'breath', 'buyer', 'chest', 'chocolate', 'conclusion', 'contribution', 'cookie', 'courage', 'dad', 'desk', 'drawer', 'establishment', 'examination', 'garbage', 'grocery', 'honey', 'impression', 'improvement', 'independence', 'insect', 'inspection', 'inspector', 'king', 'ladder', 'menu', 'penalty', 'piano', 'potato', 'profession', 'professor', 'quantity', 'reaction', 'requirement', 'salad', 'sister', 'supermarket', 'tongue', 'weakness', 'wedding', 'affair', 'ambition', 'analyst', 'apple', 'assignment', 'assistant', 'bathroom', 'bedroom', 'beer', 'birthday', 'celebration', 'championship', 'cheek', 'client', 'consequence', 'departure', 'diamond', 'dirt', 'ear', 'fortune', 'friendship', 'funeral', 'gene', 'girlfriend', 'hat', 'indication', 'intention', 'lady', 'midnight', 'negotiation', 'obligation', 'passenger', 'pizza', 'platform', 'poet', 'pollution', 'recognition', 'reputation', 'shirt', 'speaker', 'stranger', 'surgery', 'sympathy', 'tale', 'throat', 'trainer', 'uncle', 'youth'],
		verbs: ['accept', 'ache', 'acknowledge', 'act', 'add', 'admire', 'admit', 'admonish', 'advise', 'adopt', 'affirm', 'afford', 'agree', 'ail', 'alert', 'allege', 'allow', 'allude', 'amuse', 'analyze', 'announce', 'annoy', 'answer', 'apologize', 'appeal', 'appear', 'applaud', 'appreciate', 'approve', 'argue', 'arrange', 'arrest', 'arrive', 'articulate', 'ask', 'assert', 'assure', 'attach', 'attack', 'attempt', 'attend', 'attract', 'auction', 'avoid', 'avow', 'awake', 'babble', 'back', 'bake', 'balance', 'balk', 'ban', 'bang', 'bandage', 'bar', 'bare', 'bargain', 'bark', 'barrage', 'barter', 'baste', 'bat', 'bathe', 'battle', 'bawl', 'be', 'beam', 'bear', 'beat', 'become', 'befriend', 'beg', 'begin', 'behave', 'believe', 'bellow', 'belong', 'bend', 'berate', 'besiege', 'bestow', 'bet', 'bid', 'bite', 'bleach', 'bleed', 'bless', 'blind', 'blink', 'blot', 'blow', 'blurt', 'blush', 'boast', 'bob', 'boil', 'bolt', 'bomb', 'book', 'bore', 'borrow', 'bounce', 'bow', 'box', 'brag', 'brake', 'branch', 'brand', 'break', 'breathe', 'breed', 'bring', 'broadcast', 'broil', 'bruise', 'brush', 'bubble', 'build', 'bump', 'burn', 'burnish', 'bury', 'buy', 'buzz', 'cajole', 'calculate', 'call', 'camp', 'care', 'carry', 'carve', 'cause', 'caution', 'catch', 'challenge', 'change', 'chant', 'charge', 'chase', 'cheat', 'check', 'cheer', 'chew', 'chide', 'chip', 'choke', 'chomp', 'choose', 'chop', 'claim', 'clap', 'clean', 'clear', 'climb', 'clip', 'close', 'coach', 'coil', 'collect', 'color', 'comb', 'come', 'comfort', 'command', 'comment', 'communicate', 'compare', 'compete', 'complain', 'complete', 'concede', 'concentrate', 'concern', 'conclude', 'concur', 'confess', 'confide', 'confirm', 'connect', 'consent', 'consider', 'consist', 'contain', 'contend', 'continue', 'cook', 'copy', 'correct', 'cough', 'count', 'counter', 'cover', 'covet', 'crack', 'crash', 'crave', 'crawl', 'crochet', 'cross', 'criticize', 'croak', 'cross-examine', 'crowd', 'crush', 'cry', 'cure', 'curl', 'curse', 'curve', 'cut', 'cycle', 'dam', 'damage', 'dance', 'dare', 'deal', 'debate', 'decay', 'deceive', 'decide', 'decipher', 'declare', 'decorate', 'delay', 'delight', 'deliver', 'demand', 'deny', 'depend', 'describe', 'desert', 'deserve', 'desire', 'deter', 'develop', 'dial', 'dictate', 'die', 'dig', 'digress', 'direct', 'disclose', 'dislike', 'dive', 'divide', 'divorce', 'divulge', 'do', 'dock', 'dole', 'dote', 'double', 'doubt', 'drag', 'drain', 'draw', 'dream', 'dress', 'drip', 'drill', 'drink', 'drive', 'drone', 'drop', 'drown', 'dry', 'dupe', 'dump', 'dust', 'dye', 'earn', 'eat', 'echo', 'edit', 'educate', 'elope', 'embarrass', 'emigrate', 'emit', 'emphasize', 'employ', 'empty', 'enchant', 'encode', 'encourage', 'end', 'enjoin', 'enjoy', 'enter', 'entertain', 'enunciate', 'envy', 'equivocate', 'escape', 'evacuate', 'evaporate', 'exaggerate', 'examine', 'excite', 'exclaim', 'excuse', 'exercise', 'exist', 'expand', 'expect', 'expel', 'exhort', 'explain', 'explode', 'explore', 'extend', 'extoll', 'face', 'fade', 'fail', 'fall', 'falter', 'fasten', 'favor', 'fax', 'fear', 'feed', 'feel', 'fence', 'fetch', 'fight', 'file', 'fill', 'film', 'find', 'fire', 'fish', 'fit', 'fix', 'flap', 'flash', 'flee', 'float', 'flood', 'floss', 'flow', 'flower', 'fly', 'fold', 'follow', 'fool', 'force', 'foretell', 'forget', 'forgive', 'form', 'found', 'frame', 'freeze', 'fret', 'frighten', 'fry', 'fume', 'garden', 'gasp', 'gather', 'gaze', 'gel', 'get', 'gild', 'give', 'glide', 'glue', 'gnaw', 'go', 'grab', 'grate', 'grease', 'greet', 'grill', 'grin', 'grip', 'groan', 'grow', 'growl', 'grumble', 'grunt', 'guarantee', 'guard', 'guess', 'guide', 'gurgle', 'gush', 'hail', 'hammer', 'hand', 'handle', 'hang', 'happen', 'harass', 'harm', 'harness', 'hate', 'haunt', 'have', 'head', 'heal', 'heap', 'hear', 'heat', 'help', 'hide', 'highlight', 'hijack', 'hinder', 'hint', 'hiss', 'hit', 'hold', 'hook', 'hoot', 'hop', 'hope', 'hover', 'howl', 'hug', 'hum', 'hunt', 'hurry', 'hurt', 'ice', 'identify', 'ignore', 'imagine', 'immigrate', 'imply', 'implore', 'impress', 'improve', 'include', 'increase', 'infect', 'inflate', 'influence', 'inform', 'infuse', 'inject', 'injure', 'inquire', 'insist', 'inspect', 'inspire', 'instruct', 'intend', 'interest', 'interfere', 'interject', 'interrupt', 'introduce', 'invent', 'invest', 'invite', 'irritate', 'iron', 'itch', 'jab', 'jabber', 'jail', 'jam', 'jeer', 'jest', 'jog', 'join', 'joke', 'jolt', 'judge', 'juggle', 'jump', 'keep', 'kick', 'kill', 'kiss', 'kneel', 'knit', 'knock', 'knot', 'know', 'label', 'lament', 'land', 'last', 'laugh', 'lay', 'lead', 'lean', 'learn', 'leave', 'lecture', 'lend', 'let', 'level', 'license', 'lick', 'lie', 'lift', 'light', 'lighten', 'like', 'list', 'listen', 'live', 'load', 'loan', 'lock', 'long', 'look', 'loosen', 'lose', 'love', 'lower', 'mail', 'maintain', 'make', 'man', 'manage', 'mar', 'march', 'mark', 'marry', 'marvel', 'mate', 'matter', 'mean', 'measure', 'meet', 'melt', 'memorize', 'mend', 'mention', 'merge', 'milk', 'mine', 'miss', 'mix', 'moan', 'moor', 'mourn', 'molt', 'move', 'mow', 'mug', 'multiply', 'mumble', 'murder', 'mutter', 'nag', 'nail', 'name', 'nap', 'need', 'nest', 'nod', 'note', 'notice', 'number', 'obey', 'object', 'observe', 'obtain', 'occur', 'offend', 'offer', 'omit', 'open', 'operate', 'order', 'overflow', 'overrun', 'owe', 'own', 'pack', 'pad', 'paddle', 'paint', 'pant', 'park', 'part', 'pass', 'paste', 'pat', 'pause', 'pay', 'peck', 'pedal', 'peel', 'peep', 'peer', 'peg', 'pelt', 'perform', 'permit', 'pester', 'pet', 'phone', 'pick', 'pinch', 'pine', 'place', 'plan', 'plant', 'play', 'plead', 'please', 'pledge', 'plow', 'plug', 'point', 'poke', 'polish', 'ponder', 'pop', 'possess', 'post', 'postulate', 'pour', 'practice', 'pray', 'preach', 'precede', 'predict', 'prefer', 'prepare', 'present', 'preserve', 'press', 'pretend', 'prevent', 'prick', 'print', 'proceed', 'proclaim', 'produce', 'profess', 'program', 'promise', 'propose', 'protect', 'protest', 'provide', 'pry', 'pull', 'pump', 'punch', 'puncture', 'punish', 'push', 'put', 'question', 'quilt', 'quit', 'quiz', 'quote', 'race', 'radiate', 'rain', 'raise', 'rant', 'rain', 'rate', 'rave', 'reach', 'realize', 'read', 'rebuff', 'recall', 'receive', 'recite', 'recognize', 'recommend', 'record', 'reduce', 'reflect', 'refuse', 'regret', 'reign', 'reiterate', 'reject', 'rejoice', 'relate', 'relax', 'release', 'rely', 'remain', 'remember', 'remind', 'remove', 'repair', 'repeat', 'replace', 'reply', 'report', 'reprimand', 'reproduce', 'request', 'rescue', 'retire', 'retort', 'return', 'reveal', 'reverse', 'rhyme', 'ride', 'ring', 'rinse', 'rise', 'risk', 'roar', 'rob', 'rock', 'roll', 'rot', 'row', 'rub', 'ruin', 'rule', 'run', 'rush', 'sack', 'sail', 'satisfy', 'save', 'savor', 'saw', 'say', 'scare', 'scatter', 'scoff', 'scold', 'scoot', 'scorch', 'scrape', 'scratch', 'scream', 'screech', 'screw', 'scribble', 'seal', 'search', 'see', 'sell', 'send', 'sense', 'separate', 'serve', 'set', 'settle', 'sever', 'sew', 'shade', 'shampoo', 'share', 'shave', 'shelter', 'shift', 'shiver', 'shock', 'shoot', 'shop', 'shout', 'show', 'shriek', 'shrug', 'shut', 'sigh', 'sign', 'signal', 'sin', 'sing', 'singe', 'sip', 'sit', 'skate', 'skateboard', 'sketch', 'ski', 'skip', 'slap', 'sleep', 'slice', 'slide', 'slip', 'slow', 'smash', 'smell', 'smile', 'smoke', 'snap', 'snarl', 'snatch', 'sneak', 'sneer', 'sneeze', 'snicker', 'sniff', 'snore', 'snort', 'snoop', 'snooze', 'snow', 'soak', 'sob', 'soothe', 'sound', 'sow', 'span', 'spare', 'spark', 'sparkle', 'speak', 'speculate', 'spell', 'spend', 'spill', 'spin', 'spoil', 'spot', 'spray', 'sprout', 'sputter', 'squash', 'squeeze', 'stab', 'stain', 'stammer', 'stamp', 'stand', 'star', 'stare', 'start', 'stash', 'state', 'stay', 'steer', 'step', 'stipulate', 'stir', 'stitch', 'stop', 'store', 'strap', 'storm', 'stow', 'strengthen', 'stress', 'stretch', 'strip', 'stroke', 'stuff', 'stutter', 'stray', 'strum', 'strut', 'stun', 'stunt', 'submerge', 'succeed', 'suffer', 'suggest', 'suit', 'supply', 'support', 'suppose', 'surmise', 'surprise', 'surround', 'suspect', 'suspend', 'sway', 'swear', 'swim', 'swing', 'switch', 'swoop', 'sympathize', 'talk', 'take', 'tame', 'tap', 'taste', 'taunt', 'teach', 'tear', 'tease', 'telephone', 'tell', 'tempt', 'terrify', 'test', 'testify', 'thank', 'thaw', 'theorize', 'think', 'threaten', 'throw', 'thunder', 'tick', 'tickle', 'tie', 'time', 'tip', 'tire', 'toast', 'toss', 'touch', 'tour', 'tow', 'trace', 'track', 'trade', 'train', 'translate', 'transport', 'trap', 'travel', 'treat', 'tremble', 'trick', 'trickle', 'trim', 'trip', 'trot', 'trouble', 'trust', 'trounce', 'try', 'tug', 'tumble', 'turn', 'twist', 'type', 'understand', 'undress', 'unfasten', 'unite', 'unlock', 'unpack', 'uphold', 'upset', 'upstage', 'urge', 'untie', 'use', 'usurp', 'utter', 'vacuum', 'value', 'vanish', 'vanquish', 'venture', 'visit', 'voice', 'volunteer', 'vote', 'vouch', 'wail', 'wait', 'wake', 'walk', 'wallow', 'wander', 'want', 'warm', 'warn', 'wash', 'waste', 'watch', 'water', 'wave', 'waver', 'wear', 'weave', 'wed', 'weigh', 'welcome', 'whimper', 'whine', 'whip', 'whirl', 'whisper', 'whistle', 'win', 'wink', 'wipe', 'wish', 'wobble', 'wonder', 'work', 'worry', 'wrap', 'wreck', 'wrestle', 'wriggle', 'write', 'writhe', 'x-ray', 'yawn', 'yell', 'yelp', 'yield', 'yodel', 'zip', 'zoom'],
		adverbs: ['accidentally', 'always', 'angrily', 'anxiously', 'awkwardly', 'badly', 'blindly', 'boastfully', 'boldly', 'bravely', 'brightly', 'cheerfully', 'coyly', 'crazily', 'defiantly', 'deftly', 'deliberately', 'devotedly', 'doubtfully', 'dramatically', 'dutifully', 'eagerly', 'elegantly', 'enormously', 'evenly', 'eventually', 'exactly', 'faithfully', 'finally', 'foolishly', 'fortunately', 'frequently', 'gleefully', 'gracefully', 'happily', 'hastily', 'honestly', 'hopelessly', 'hourly', 'hungrily', 'innocently', 'inquisitively', 'irritably', 'jealously', 'justly', 'kindly', 'lazily', 'loosely', 'madly', 'merrily', 'mortally', 'mysteriously', 'nervously', 'never', 'obediently', 'obnoxiously', 'occasionally', 'often', 'only', 'perfectly', 'politely', 'poorly', 'powerfully', 'promptly', 'quickly', 'rapidly', 'rarely', 'regularly', 'rudely', 'safely', 'seldom', 'selfishly', 'seriously', 'shakily', 'sharply', 'silently', 'slowly', 'solemnly', 'sometimes', 'speedily', 'sternly', 'technically', 'tediously', 'unexpectedly', 'usually', 'victoriously', 'vivaciously', 'warmly', 'wearily', 'wildly'],
		adjectives: ['aback', 'abaft', 'abandoned', 'abashed', 'aberrant', 'abhorrent', 'abiding', 'abject', 'ablaze', 'able', 'abnormal', 'aboard', 'aboriginal', 'abounding', 'abrasive', 'abrupt', 'absent', 'absorbed', 'absorbing', 'abstracted', 'absurd', 'abundant', 'abusive', 'acceptable', 'accessible', 'accidental', 'accurate', 'acid', 'acidic', 'acoustic', 'acrid', 'actually', 'ad', 'hoc', 'adamant', 'adaptable', 'addicted', 'adhesive', 'adjoining', 'adorable', 'adventurous', 'afraid', 'aggressive', 'agonizing', 'agreeable', 'ahead', 'ajar', 'alcoholic', 'alert', 'alike', 'alive', 'alleged', 'alluring', 'aloof', 'amazing', 'ambiguous', 'ambitious', 'amuck', 'amused', 'amusing', 'ancient', 'angry', 'animated', 'annoyed', 'annoying', 'anxious', 'apathetic', 'aromatic', 'arrogant', 'ashamed', 'aspiring', 'assorted', 'astonishing', 'attractive', 'auspicious', 'automatic', 'available', 'average', 'awake', 'aware', 'awesome', 'awful', 'axiomatic', 'bad', 'barbarous', 'bashful', 'bawdy', 'beautiful', 'befitting', 'belligerent', 'beneficial', 'bent', 'berserk', 'best', 'better', 'bewildered', 'big', 'billowy', 'bite-sized', 'bitter', 'bizarre', 'black', 'black-and-white', 'bloody', 'blue', 'blue-eyed', 'blushing', 'boiling', 'boorish', 'bored', 'boring', 'bouncy', 'boundless', 'brainy', 'brash', 'brave', 'brawny', 'breakable', 'breezy', 'brief', 'bright', 'bright', 'broad', 'broken', 'brown', 'bumpy', 'burly', 'bustling', 'busy', 'cagey', 'calculating', 'callous', 'calm', 'capable', 'capricious', 'careful', 'careless', 'caring', 'cautious', 'ceaseless', 'certain', 'changeable', 'charming', 'cheap', 'cheerful', 'chemical', 'chief', 'childlike', 'chilly', 'chivalrous', 'chubby', 'chunky', 'clammy', 'classy', 'clean', 'clear', 'clever', 'cloistered', 'cloudy', 'closed', 'clumsy', 'cluttered', 'coherent', 'cold', 'colorful', 'colossal', 'combative', 'comfortable', 'common', 'complete', 'complex', 'concerned', 'condemned', 'confused', 'conscious', 'cooing', 'cool', 'cooperative', 'coordinated', 'courageous', 'cowardly', 'crabby', 'craven', 'crazy', 'creepy', 'crooked', 'crowded', 'cruel', 'cuddly', 'cultured', 'cumbersome', 'curious', 'curly', 'curved', 'curvy', 'cut', 'cute', 'cute', 'cynical', 'daffy', 'daily', 'damaged', 'damaging', 'damp', 'dangerous', 'dapper', 'dark', 'dashing', 'dazzling', 'dead', 'deadpan', 'deafening', 'dear', 'debonair', 'decisive', 'decorous', 'deep', 'deeply', 'defeated', 'defective', 'defiant', 'delicate', 'delicious', 'delightful', 'demonic', 'delirious', 'dependent', 'depressed', 'deranged', 'descriptive', 'deserted', 'detailed', 'determined', 'devilish', 'didactic', 'different', 'difficult', 'diligent', 'direful', 'dirty', 'disagreeable', 'disastrous', 'discreet', 'disgusted', 'disgusting', 'disillusioned', 'dispensable', 'distinct', 'disturbed', 'divergent', 'dizzy', 'domineering', 'doubtful', 'drab', 'draconian', 'dramatic', 'dreary', 'drunk', 'dry', 'dull', 'dusty', 'dusty', 'dynamic', 'dysfunctional', 'eager', 'early', 'earsplitting', 'earthy', 'easy', 'eatable', 'economic', 'educated', 'efficacious', 'efficient', 'elastic', 'elated', 'elderly', 'electric', 'elegant', 'elfin', 'elite', 'embarrassed', 'eminent', 'empty', 'enchanted', 'enchanting', 'encouraging', 'endurable', 'energetic', 'enormous', 'entertaining', 'enthusiastic', 'envious', 'equable', 'equal', 'erect', 'erratic', 'ethereal', 'evanescent', 'evasive', 'even', 'excellent', 'excited', 'exciting', 'exclusive', 'exotic', 'expensive', 'extra-large', 'extra-small', 'exuberant', 'exultant', 'fabulous', 'faded', 'faint', 'fair', 'faithful', 'fallacious', 'false', 'familiar', 'famous', 'fanatical', 'fancy', 'fantastic', 'far', 'far-flung', 'fascinated', 'fast', 'fat', 'faulty', 'fearful', 'fearless', 'feeble', 'feigned', 'female', 'fertile', 'festive', 'few', 'fierce', 'filthy', 'fine', 'finicky', 'first', 'fixed', 'flagrant', 'flaky', 'flashy', 'flat', 'flawless', 'flimsy', 'flippant', 'flowery', 'fluffy', 'fluttering', 'foamy', 'foolish', 'foregoing', 'forgetful', 'fortunate', 'frail', 'fragile', 'frantic', 'free', 'freezing', 'frequent', 'fresh', 'fretful', 'friendly', 'frightened', 'frightening', 'full', 'fumbling', 'functional', 'funny', 'furry', 'furtive', 'future', 'futuristic', 'fuzzy', 'gabby', 'gainful', 'gamy', 'gaping', 'garrulous', 'gaudy', 'general', 'gentle', 'giant', 'giddy', 'gifted', 'gigantic', 'glamorous', 'gleaming', 'glib', 'glistening', 'glorious', 'glossy', 'godly', 'good', 'goofy', 'gorgeous', 'graceful', 'grandiose', 'grateful', 'gratis', 'gray', 'greasy', 'great', 'greedy', 'green', 'grey', 'grieving', 'groovy', 'grotesque', 'grouchy', 'grubby', 'gruesome', 'grumpy', 'guarded', 'guiltless', 'gullible', 'gusty', 'guttural', 'habitual', 'half', 'hallowed', 'halting', 'handsome', 'handsomely', 'handy', 'hanging', 'hapless', 'happy', 'hard', 'hard-to-find', 'harmonious', 'harsh', 'hateful', 'heady', 'healthy', 'heartbreaking', 'heavenly', 'heavy', 'hellish', 'helpful', 'helpless', 'hesitant', 'hideous', 'high', 'highfalutin', 'high-pitched', 'hilarious', 'hissing', 'historical', 'holistic', 'hollow', 'homeless', 'homely', 'honorable', 'horrible', 'hospitable', 'hot', 'huge', 'hulking', 'humdrum', 'humorous', 'hungry', 'hurried', 'hurt', 'hushed', 'husky', 'hypnotic', 'hysterical', 'icky', 'icy', 'idiotic', 'ignorant', 'ill', 'illegal', 'ill-fated', 'ill-informed', 'illustrious', 'imaginary', 'immense', 'imminent', 'impartial', 'imperfect', 'impolite', 'important', 'imported', 'impossible', 'incandescent', 'incompetent', 'inconclusive', 'industrious', 'incredible', 'inexpensive', 'infamous', 'innate', 'innocent', 'inquisitive', 'insidious', 'instinctive', 'intelligent', 'interesting', 'internal', 'invincible', 'irate', 'irritating', 'itchy', 'jaded', 'jagged', 'jazzy', 'jealous', 'jittery', 'jobless', 'jolly', 'joyous', 'judicious', 'juicy', 'jumbled', 'jumpy', 'juvenile', 'kaput', 'keen', 'kind', 'kindhearted', 'kindly', 'knotty', 'knowing', 'knowledgeable', 'known', 'labored', 'lackadaisical', 'lacking', 'lame', 'lamentable', 'languid', 'large', 'last', 'late', 'laughable', 'lavish', 'lazy', 'lean', 'learned', 'left', 'legal', 'lethal', 'level', 'lewd', 'light', 'like', 'likeable', 'limping', 'literate', 'little', 'lively', 'lively', 'living', 'lonely', 'long', 'longing', 'long-term', 'loose', 'lopsided', 'loud', 'loutish', 'lovely', 'loving', 'low', 'lowly', 'lucky', 'ludicrous', 'lumpy', 'lush', 'luxuriant', 'lying', 'lyrical', 'macabre', 'macho', 'maddening', 'madly', 'magenta', 'magical', 'magnificent', 'majestic', 'makeshift', 'male', 'malicious', 'mammoth', 'maniacal', 'many', 'marked', 'massive', 'married', 'marvelous', 'material', 'materialistic', 'mature', 'mean', 'measly', 'meaty', 'medical', 'meek', 'mellow', 'melodic', 'melted', 'merciful', 'mere', 'messy', 'mighty', 'military', 'milky', 'mindless', 'miniature', 'minor', 'miscreant', 'misty', 'mixed', 'moaning', 'modern', 'moldy', 'momentous', 'motionless', 'mountainous', 'muddled', 'mundane', 'murky', 'mushy', 'mute', 'mysterious', 'naive', 'nappy', 'narrow', 'nasty', 'natural', 'naughty', 'nauseating', 'near', 'neat', 'nebulous', 'necessary', 'needless', 'needy', 'neighborly', 'nervous', 'new', 'next', 'nice', 'nifty', 'nimble', 'nippy', 'noiseless', 'noisy', 'nonchalant', 'nondescript', 'nonstop', 'normal', 'nostalgic', 'nosy', 'noxious', 'null', 'numberless', 'numerous', 'nutritious', 'nutty', 'oafish', 'obedient', 'obeisant', 'obese', 'obnoxious', 'obscene', 'obsequious', 'observant', 'obsolete', 'obtainable', 'oceanic', 'odd', 'offbeat', 'old', 'old-fashioned', 'omniscient', 'onerous', 'open', 'opposite', 'optimal', 'orange', 'ordinary', 'organic', 'ossified', 'outgoing', 'outrageous', 'outstanding', 'oval', 'overconfident', 'overjoyed', 'overrated', 'overt', 'overwrought', 'painful', 'painstaking', 'pale', 'paltry', 'panicky', 'panoramic', 'parallel', 'parched', 'parsimonious', 'past', 'pastoral', 'pathetic', 'peaceful', 'penitent', 'perfect', 'periodic', 'permissible', 'perpetual', 'petite', 'petite', 'phobic', 'physical', 'picayune', 'pink', 'piquant', 'placid', 'plain', 'plant', 'plastic', 'plausible', 'pleasant', 'plucky', 'pointless', 'poised', 'polite', 'political', 'poor', 'possessive', 'possible', 'powerful', 'precious', 'premium', 'present', 'pretty', 'previous', 'pricey', 'prickly', 'private', 'probable', 'productive', 'profuse', 'protective', 'proud', 'psychedelic', 'psychotic', 'public', 'puffy', 'pumped', 'puny', 'purple', 'purring', 'pushy', 'puzzled', 'puzzling', 'quack', 'quaint', 'quarrelsome', 'questionable', 'quick', 'quickest', 'quiet', 'quirky', 'quixotic', 'quizzical', 'rabid', 'racial', 'ragged', 'rainy', 'rambunctious', 'rampant', 'rapid', 'rare', 'raspy', 'ratty', 'ready', 'real', 'rebel', 'receptive', 'recondite', 'red', 'redundant', 'reflective', 'regular', 'relieved', 'remarkable', 'reminiscent', 'repulsive', 'resolute', 'resonant', 'responsible', 'rhetorical', 'rich', 'right', 'righteous', 'rightful', 'rigid', 'ripe', 'ritzy', 'roasted', 'robust', 'romantic', 'roomy', 'rotten', 'rough', 'round', 'royal', 'ruddy', 'rude', 'rural', 'rustic', 'ruthless', 'sable', 'sad', 'safe', 'salty', 'same', 'sassy', 'satisfying', 'savory', 'scandalous', 'scarce', 'scared', 'scary', 'scattered', 'scientific', 'scintillating', 'scrawny', 'screeching', 'second', 'second-hand', 'secret', 'secretive', 'sedate', 'seemly', 'selective', 'selfish', 'separate', 'serious', 'shaggy', 'shaky', 'shallow', 'sharp', 'shiny', 'shivering', 'shocking', 'short', 'shrill', 'shut', 'shy', 'sick', 'silent', 'silent', 'silky', 'silly', 'simple', 'simplistic', 'sincere', 'skillful', 'skinny', 'sleepy', 'slim', 'slimy', 'slippery', 'sloppy', 'slow', 'small', 'smart', 'smelly', 'smiling', 'smoggy', 'smooth', 'sneaky', 'snobbish', 'snotty', 'soft', 'soggy', 'solid', 'somber', 'sophisticated', 'sordid', 'sore', 'sore', 'sour', 'sparkling', 'special', 'spectacular', 'spicy', 'spiffy', 'spiky', 'spiritual', 'spiteful', 'splendid', 'spooky', 'spotless', 'spotted', 'spotty', 'spurious', 'squalid', 'square', 'squealing', 'squeamish', 'staking', 'stale', 'standing', 'statuesque', 'steadfast', 'steady', 'steep', 'stereotyped', 'sticky', 'stiff', 'stimulating', 'stingy', 'stormy', 'straight', 'strange', 'striped', 'strong', 'stupendous', 'stupid', 'sturdy', 'subdued', 'subsequent', 'substantial', 'successful', 'succinct', 'sudden', 'sulky', 'super', 'superb', 'superficial', 'supreme', 'swanky', 'sweet', 'sweltering', 'swift', 'symptomatic', 'synonymous', 'taboo', 'tacit', 'tacky', 'talented', 'tall', 'tame', 'tan', 'tangible', 'tangy', 'tart', 'tasteful', 'tasteless', 'tasty', 'tawdry', 'tearful', 'tedious', 'teeny', 'teeny-tiny', 'telling', 'temporary', 'ten', 'tender', 'tense', 'tense', 'tenuous', 'terrible', 'terrific', 'tested', 'testy', 'thankful', 'therapeutic', 'thick', 'thin', 'thinkable', 'thirsty', 'thirsty', 'thoughtful', 'thoughtless', 'threatening', 'thundering', 'tidy', 'tight', 'tightfisted', 'tiny', 'tired', 'tiresome', 'toothsome', 'torpid', 'tough', 'towering', 'tranquil', 'trashy', 'tremendous', 'tricky', 'trite', 'troubled', 'truculent', 'true', 'truthful', 'typical', 'ubiquitous', 'ugliest', 'ugly', 'ultra', 'unable', 'unaccountable', 'unadvised', 'unarmed', 'unbecoming', 'unbiased', 'uncovered', 'understood', 'undesirable', 'unequal', 'unequaled', 'uneven', 'unhealthy', 'uninterested', 'unique', 'unkempt', 'unknown', 'unnatural', 'unruly', 'unsightly', 'unsuitable', 'untidy', 'unused', 'unusual', 'unwieldy', 'unwritten', 'upbeat', 'uppity', 'upset', 'uptight', 'used', 'useful', 'useless', 'utopian', 'utter', 'uttermost', 'vacuous', 'vagabond', 'vague', 'valuable', 'various', 'vast', 'vengeful', 'venomous', 'verdant', 'versed', 'victorious', 'vigorous', 'violent', 'violet', 'vivacious', 'voiceless', 'volatile', 'voracious', 'vulgar', 'wacky', 'waggish', 'waiting', 'wakeful', 'wandering', 'wanting', 'warlike', 'warm', 'wary', 'wasteful', 'watery', 'weak', 'wealthy', 'weary', 'well-groomed', 'well-made', 'well-off', 'well-to-do', 'wet', 'whimsical', 'whispering', 'white', 'whole', 'wholesale', 'wicked', 'wide', 'wide-eyed', 'wiggly', 'wild', 'willing', 'windy', 'wiry', 'wise', 'wistful', 'witty', 'woebegone', 'womanly', 'wonderful', 'wooden', 'woozy', 'workable', 'worried', 'worthless', 'wrathful', 'wretched', 'wrong', 'wry'],
		actions: ['telling', 'speaking', 'walking', 'running', 'faking', 'pulling', 'pushing', 'bluffing', 'lying', 'sleeping', 'relaxing', 'dreaming', 'sitting', 'standing', 'beating', 'playing', 'jogging', 'dancing', 'swimming', 'driving', 'riding', 'cycling', 'hopping', 'drinking', 'eating', 'shaking', 'raking', 'piling', 'piercing', 'penetrating', 'squeezing', 'mashing', 'rolling', 'spinning', 'wearing', 'removing', 'adding', 'distributing', 'begging', 'gifting', 'praying', 'cursing', 'laughing', 'crying', 'smiling', 'texting', 'typing', 'printing', 'calling', 'receiving', 'ignoring', 'opening', 'closing', 'gardening', 'watering', 'planting', 'cooking', 'strolling', 'chatting', 'connecting', 'showing', 'revealing', 'seeing', 'proposing', 'rejecting', 'worrying', 'going', 'coming', 'swinging', 'recalling', 'dialing'],
		time: ['very soon', 'before long', 'in twenty years', 'tomorrow', 'immediately', 'today', 'next week', 'in a few days', 'soon', 'later', 'before you die', 'before you know it', 'when you wake up tomorrow', 'in a while', 'someday', 'one day', 'soonish', 'this evening', 'this morning', 'this afternoon', 'later on'],
		amount: ['little', 'lot', 'quite a bit', 'more than you can imagine', 'less than usual', 'more than usual', 'the right amount', 'something', 'everything', 'nothing', 'absolutely zero', 'absolutely nothing', 'a butt-ton']
	};
	this.vowels = ['a', 'e', 'i', 'o', 'u'];
};

SentenceService.prototype = {

	getWord: function(type, checkVowel) {
		var prefix = '';
		var word = this.words[type][ChatHelper.getRandomInt(0, this.words[type].length - 1)];
		if (checkVowel) {
			prefix = $.inArray(word.charAt(0), this.vowels) !== -1 ? 'an ' : 'a ';
		}
		return prefix + word;
	},

	getSentence: function() {
		var sentences = [
			'No, your ' + this.getWord('nouns') + ' does not ' + this.getWord('verbs'),
			'Yes, your ' + this.getWord('adjectives') + ' ' + this.getWord('nouns') + ' is going to ' + this.getWord('verbs'),
			'Your ' + this.getWord('adjectives') + ' ' + this.getWord('nouns') + ' is going to ' + this.getWord('verbs') + ' ' + this.getWord('time'),
			this.getWord('time') + ' you will ' + this.getWord('adverbs') + ' ' + this.getWord('verbs') + ' ' + this.getWord('amount'),
			'Beware of the ' + this.getWord('nouns'),
			'You should ' + this.getWord('verbs') + ' yourself before you ' + this.getWord('verbs'),
			'If your ' + this.getWord('nouns') + ' is ' + this.getWord('adjectives') + ', you should ' + this.getWord('verbs'),
			this.getWord('nouns', true) + ' will soon ' + this.getWord('verbs'),
			'Your ' + this.getWord('nouns') + ' will soon ' + this.getWord('verbs'),
			this.getWord('nouns', true) + ' will soon ' + this.getWord('verbs') + '  your ' + this.getWord('nouns'),
			'You need ' + this.getWord('nouns', true),
			'Start ' + this.getWord('actions') + '. You\'ll feel ' + this.getWord('adjectives'),
			'Don\'t ' + this.getWord('verbs'),
			'Stop ' + this.getWord('actions'),
			this.getWord('actions') + ' is ' + this.getWord('adjectives') + ' for you',
			'Your ' + this.getWord('nouns') + ' is worth ' + this.getWord('amount'),
			'Go ' + this.getWord('verbs') + ' yourself',
			'You are ' + this.getWord('adjectives', true),
			'If you ' + this.getWord('verbs') + ', you might ' + this.getWord('verbs'),
			'Check your ' + this.getWord('nouns'),
			this.getWord('time') + ' will be ' + this.getWord('adjectives'),
			this.getWord('adjectives', true) + ', ' + this.getWord('adjectives') + ', and ' + this.getWord('adjectives') + ' ' + this.getWord('nouns') + ' will soon ' + this.getWord('verbs') + ' your ' + this.getWord('nouns'),
			'The ' + this.getWord('adjectives') + ' ' + this.getWord('nouns') + ' is a ' + this.getWord('nouns'),
			this.getWord('amount') + ' will be ' + this.getWord('adjectives') + ' with your ' + this.getWord('adjectives') + ' ' + this.getWord('nouns')
		];
		return ChatHelper.capitalizeSentence(sentences[ChatHelper.getRandomInt(0, sentences.length - 1)] + '.');
	}

};