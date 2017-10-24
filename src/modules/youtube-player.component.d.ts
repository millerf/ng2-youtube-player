/// <reference types="youtube" />
import { AfterContentInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { YoutubePlayerService } from '../services/youtube-player.service';
export declare class YoutubePlayerComponent implements AfterContentInit {
    playerService: YoutubePlayerService;
    private elementRef;
    private renderer;
    videoId: string;
    height: number;
    width: number;
    /**
     * @description sets the protocol by the navigator object
     * if there is no window, it sets a default http protocol
     * unless the protocol is set from outside
     */
    protocol: string;
    playerVars: YT.PlayerVars;
    ready: EventEmitter<YT.Player>;
    change: EventEmitter<YT.PlayerEvent>;
    constructor(playerService: YoutubePlayerService, elementRef: ElementRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    getProtocol(): string;
}
