package com.company.sales.web.sys;

import com.haulmont.cuba.web.sys.CubaBootstrapListener;
import com.vaadin.server.BootstrapPageResponse;
import org.jsoup.nodes.Element;

public class ElectronBootstrapListener extends CubaBootstrapListener {

    protected void includeScriptInline(String code, BootstrapPageResponse response, Element head) {
        Element script = response.getDocument().createElement("script");
        script.text(code);
        head.appendChild(script);
    }

    @Override
    protected void includeScript(String src, BootstrapPageResponse response, Element head) {
        // Hack for Electron jQuery compatibility
        // https://stackoverflow.com/questions/32621988/electron-jquery-is-not-defined
        includeScriptInline("if (typeof module === 'object') {window.module = module; module = undefined;}",
                response, head);

        super.includeScript(src, response, head);

        includeScriptInline("if (window.module) module = window.module;", response, head);
    }
}