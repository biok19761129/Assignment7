    // STEP 2
    $(document).ready(function() {
        
        // The Headings
        
        // STEP 3
        $("section h2, aside h2").css("border", "1px solid black");
        // STEP 4
        $("section h2, aside h2").css("color", "#CC1C0D");
        // STEP 5
        $("section h2, aside h2").css("padding", "3px 0 3px 20px");
        // STEP 6
        $("section h2, aside h2").css("border-radius", "0 5px");
        // STEP 7
        $("section h2, aside h2").css("background-color", "#DFE3E6");
        
        // The Navigation Menu
        
        // STEP 8
        $("li a").addClass("navigation");
        // STEP 9
        $("a.navigation").css("border", "1px solid #929CA4");
        // STEP 10
         $("a.navigation").css("color", "#CC1C0D");
        // STEP 11
        $("a.navigation").css("padding", "3px 0 3px 20px");
        // STEP 12
        $("a.navigation").css("background-color", "#DFE3E6");
        
        // Main Content 
        
        // STEP 13
        $("section p").removeClass("vprospect").removeClass("vconvert").removeClass("vretain");
        
        // STEP 14
        $("aside p:last").append("<br> Chevy Dealers Association");
        
        // STEP 15, STEP 16
        $("aside p:contains('Vecta Corporation')").wrapInner("<q></q>").css("font-style", "italic");
        
         // STEP 17
        $("section p b").replaceWith("<a href='http://www.vectacorp.com'>Vecta Corporation</a>");
    });
        
       