
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
    //Edge symbol: 'stage'
    (function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Text").html("NewText");sym.stop();});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_start}","click",function(sym,e){sym.play('question-one');});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1342,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1852,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-4}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2130,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2375,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes}","click",function(sym,e){sym.play("question-two");});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2628,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2954,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3341,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3614,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes2}","click",function(sym,e){sym.play("question-three");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes3}","click",function(sym,e){sym.play("question-four");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes4}","click",function(sym,e){sym.play("question-five");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes5}","click",function(sym,e){sym.play("question-six");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes6}","click",function(sym,e){sym.play("question-seven");});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3891,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4130,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4391,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4693,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5020,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5352,function(sym,e){sym.stop();});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no}","click",function(sym,e){sym.play("question-one-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no2}","click",function(sym,e){sym.play("question-two-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no3}","click",function(sym,e){sym.play("question-three-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no4}","click",function(sym,e){sym.play("question-four-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no5}","click",function(sym,e){sym.play("question-five-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no6}","click",function(sym,e){sym.play("question-six-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_no7}","click",function(sym,e){sym.play("question-seven-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-42}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes7}","click",function(sym,e){sym.play("question-seven-no");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-43}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-44}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-46}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-47}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_back-45}","click",function(sym,e){sym.play("index");});
    //Edge binding end
    })("stage");
    //Edge symbol end:'stage'
    
    //=========================================================
    
    //Edge symbol: 'Symbol_1'
    (function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_start-fyl}","click",function(sym,e){sym.play(question-one);});
    //Edge binding end
    })("Symbol_1");
    //Edge symbol end:'Symbol_1'
    
    //=========================================================
    
    //Edge symbol: 'yes-1'
    (function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_yes}","click",function(sym,e){sym.play('question-two');});
    //Edge binding end
    Symbol.bindElementAction(compId,symbolName,"${_yes}","mouseup",function(sym,e){sym.getSymbol("yes-1").deleteSymbol();});
    //Edge binding end
    })("yes-1");
    //Edge symbol end:'yes-1'
    })(jQuery,AdobeEdge,"EDGE-101289793");