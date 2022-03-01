
app.beginUndoGroup("Remove Markers");
for(var i =0; i < app.project.activeItem.selectedLayers.length; i++){
        thisLayer = app.project.activeItem.selectedLayers[i];
        
                for(var j=1; j<= thisLayer.marker.numKeys; j++){
                    currentMarkerRemove = thisLayer.marker.removeKey(j);
                    j = j-1;
                    };
    
    };
app.endUndoGroup();