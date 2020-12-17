"use strict";

import {registerPlugin} from "@wordpress/plugins";
import { PluginSidebarMoreMenuItem, PluginSidebar } from "@wordpress/edit-post";
import Plugin from "./components/Plugin";
import { useEffect } from "@wordpress/element"

// ---------------------------------------
// validate post date selection
// ---------------------------------------
import './auto/post-date.js';
import { useErrors } from "./hooks/use-store";
import { showError } from "./utils/notice";
;

if(typeof window.PostToMailchimp === typeof undefined){
    window.PostToMailchimp = {
        customConfig: [],
    };
}
if(typeof window.PostToMailchimp.customConfig === typeof undefined){
    window.PostToMailchimp.customConfig = [];
}

// ---------------------------------------
// UI
// ---------------------------------------
const PLUGIN_NAME = "post-to-mailchimp"
registerPlugin(PLUGIN_NAME, {
    render: ()=>{
        const errors = useErrors();
        useEffect(()=>{
            if(errors.length > 0){
                const error = errors[errors.length-1];
                let data = "";
                if(error.data !== null && typeof error.data === typeof {}){
                    data = " "+JSON.stringify(error.data);
                }
                showError(error.message+data);
                if(typeof error.additional_errors === typeof []){
                    for(const e of error.additional_errors){
                        let innerData = "";
                        if(error.data !== null && typeof error.data === typeof {}){
                            innerData = " "+JSON.stringify(error.data);
                        }
                        showError(e.message+innerData);
                    }
                }
            }
        }, [errors.length]);

        return <>
            <PluginSidebarMoreMenuItem
                target={PLUGIN_NAME}
                icon="email"
            >
                Post to Mailchimp
            </PluginSidebarMoreMenuItem>
            <PluginSidebar
                name={PLUGIN_NAME}
                icon="email"
                title="Post to Mailchimp"
            >
                <Plugin />
            </PluginSidebar>
        </>
    }
});

