# encoding: utf-8

require 'json'

data = [
    {
        "title" => "SAT List 1", 
        "words" => 
        [
            {"word" => "dominance", "ps" => "'dɔminəns", "mean" => "n. 优势；统治", "desc" => "词根dom统治，又如：kingdom王国", "sample" => ""}, 
            {"word" => "edible", "ps" => "'edibl", "mean" => "adj. 可食用的", "desc" => "词根ed=eat；清浊转换。", "sample" => "This food is ~. "}, 
            {"word" => "longevity", "ps" => "lɔn'dʒevəti", "mean" => "n. 长寿", "desc" => "词根ev=age；又如medieval 中世纪，即Middle Age", "sample" => "Everyone wants ~. "}
        ]
    },
    {
        "title" => "SAT List 2", 
        "words" => 
        [
            {"word" => "Dominance", "ps" => "'dɔminəns", "mean" => "n. 优势；统治", "desc" => "词根dom统治，又如：kingdom王国", "sample" => ""}, 
            {"word" => "Edible", "ps" => "'edibl", "mean" => "adj. 可食用的", "desc" => "词根ed=eat；清浊转换。", "sample" => "This food is ~. "}, 
            {"word" => "Longevity", "ps" => "lɔn'dʒevəti", "mean" => "n. 长寿", "desc" => "词根ev=age；又如medieval 中世纪，即Middle Age", "sample" => "Everyone wants ~. "}
        ]
    }
]

flat = []

data.each() { |list|
    list["words"].each() { |word|
        flat = flat + [word]
    }
}

puts flat.to_json