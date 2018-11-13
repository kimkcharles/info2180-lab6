<?php

$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <definition name = "definition" author = "Kim">
    A statement of the exact meaning of a word, especially in a dictionary
    </definition>
    <definition name = "bar"  author = "Dan">
    A place that sells alcholic beverages
    </definition>
    <definition name = "ajax"  author = "Kash">
    Technique which involves the use of javascript and xml (or JSON)
    </definition>
    <definition name = "html"  author = "Abi">
    The standard markup language for creating web pages and web applications
    </definition>
    <definition name = "css"  author = "TanTan">
    A style sheet language used for describing the presentation of a document written in a markup language.
    </definition>
    <definition name = "javascript" author = "Campbell">
    A lightweight, interpreted programming language with first-class functions that adds interactivity to your website
    </definition>
    <definition name = "php" author = "QQ">
    A server-side scripting language, and a powerful tool for making dynamic and interactive websites
    </definition>
</entries>';


header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($xmldata);
echo $xmlOutput->asXML();