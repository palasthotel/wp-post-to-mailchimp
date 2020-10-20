"use strict";
import {registerPlugin} from "@wordpress/plugins";
import { PluginSidebarMoreMenuItem, PluginSidebar } from "@wordpress/edit-post";
import apiFetch from '@wordpress/api-fetch';
import {select} from '@wordpress/data';
import PluginComponent from "./components/PluginComponent";

(()=>{

    const PLUGIN_NAME = "post-to-mailchimp"

    registerPlugin(PLUGIN_NAME, {
        render: ()=>{
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
                    <PluginComponent />
                </PluginSidebar>
            </>
        }
    });


})();
