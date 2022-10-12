'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mindata documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1c652d6efe7e1237e752719471a608d0ce50906889ee61f887afc82e8fcfa0dc791600fd5ccd089686d05ea757140d6862e94aa3c30aa695bdc75637c05fb708"' : 'data-target="#xs-components-links-module-AppModule-1c652d6efe7e1237e752719471a608d0ce50906889ee61f887afc82e8fcfa0dc791600fd5ccd089686d05ea757140d6862e94aa3c30aa695bdc75637c05fb708"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1c652d6efe7e1237e752719471a608d0ce50906889ee61f887afc82e8fcfa0dc791600fd5ccd089686d05ea757140d6862e94aa3c30aa695bdc75637c05fb708"' :
                                            'id="xs-components-links-module-AppModule-1c652d6efe7e1237e752719471a608d0ce50906889ee61f887afc82e8fcfa0dc791600fd5ccd089686d05ea757140d6862e94aa3c30aa695bdc75637c05fb708"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HerosModule.html" data-type="entity-link" >HerosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' : 'data-target="#xs-components-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' :
                                            'id="xs-components-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' }>
                                            <li class="link">
                                                <a href="components/ActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' : 'data-target="#xs-directives-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' :
                                        'id="xs-directives-links-module-HerosModule-eb11adbaec86f87774161cc669b1df7fd49d838113428fb72b78e716922860ec6eaa60e2cb4771d9e42fad0d8666c53da8805fd5a2cb9b940e3032f5805dd877"' }>
                                        <li class="link">
                                            <a href="directives/ToUpperCaseDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToUpperCaseDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HerosRoutingModule.html" data-type="entity-link" >HerosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-54db1b3f40b11072d7345c4d9184bf7ec3105e0e9f79c5614d5597a712ce84ca9848fbcc4aed1cbf2c5854f407665ccc6e0982ffed72c70f46ca822d2410d7ce"' : 'data-target="#xs-pipes-links-module-PipesModule-54db1b3f40b11072d7345c4d9184bf7ec3105e0e9f79c5614d5597a712ce84ca9848fbcc4aed1cbf2c5854f407665ccc6e0982ffed72c70f46ca822d2410d7ce"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-54db1b3f40b11072d7345c4d9184bf7ec3105e0e9f79c5614d5597a712ce84ca9848fbcc4aed1cbf2c5854f407665ccc6e0982ffed72c70f46ca822d2410d7ce"' :
                                            'id="xs-pipes-links-module-PipesModule-54db1b3f40b11072d7345c4d9184bf7ec3105e0e9f79c5614d5597a712ce84ca9848fbcc4aed1cbf2c5854f407665ccc6e0982ffed72c70f46ca822d2410d7ce"' }>
                                            <li class="link">
                                                <a href="pipes/GenderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenderPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ImgNotFoundPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImgNotFoundPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ActionsComponent.html" data-type="entity-link" >ActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AlertComponent.html" data-type="entity-link" >AlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogDelete.html" data-type="entity-link" >DialogDelete</a>
                            </li>
                            <li class="link">
                                <a href="components/HeroFilterComponent.html" data-type="entity-link" >HeroFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageComponent.html" data-type="entity-link" >ImageComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Hero.html" data-type="entity-link" >Hero</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeroApiService.html" data-type="entity-link" >HeroApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeroFilterService.html" data-type="entity-link" >HeroFilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAlert.html" data-type="entity-link" >IAlert</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHero.html" data-type="entity-link" >IHero</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});