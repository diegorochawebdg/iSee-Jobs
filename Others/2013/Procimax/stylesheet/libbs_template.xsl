<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <xsl:for-each select="menu/item">
            <li class="touchcarousel-item">
                <img height="130" width="178" src="{concat('thumbs/', thumb)}" onclick="{concat('show_section(', section, ')')}"/>
            </li>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>