"use strict";
import {registerPlugin} from "@wordpress/plugins";
import { PluginSidebarMoreMenuItem, PluginSidebar } from "@wordpress/edit-post";
import Plugin from "./components/Plugin";

// ---------------------------------------
// validate post date selection
// ---------------------------------------
import './auto/post-date.js'
import { TextControl } from "@wordpress/components";
import { usePost } from "./hooks/use-post";

PostToMailchimp.customConfig = [
    {
        key: "subject",
        Element: ({value, onChange})=> {
            const post = usePost();
            return <TextControl
                label="Betreffzeile (optional)"
                value={value || ""}
                onChange={onChange}
                placeholder={post.title}
            />
        }
    },

    {
        key: "issue_number",
        Element: ({value, onChange})=> {
            return <TextControl
                label="Ausgabennummer"
                value={value || ""}
                onChange={onChange}
            />
        }
    }

];

// ---------------------------------------
// UI
// ---------------------------------------
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
                <Plugin />
            </PluginSidebar>
        </>
    }
});

