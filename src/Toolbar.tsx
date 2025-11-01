// src/Toolbar.tsx
import React from 'react';
import { Upload, Download, Share2, History, MessageSquare, Undo2, Redo2 } from 'lucide-react';
import './Toolbar.css';

interface ToolbarProps {
  onImport: () => void;
  onExportCSV: () => void;
  onExportExcel: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onShare: () => void;
  onHistory: () => void;
  onComments: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onImport, onExportCSV, onExportExcel, onUndo, onRedo, onShare, onHistory, onComments }) => {
  return (
    <div className="toolbar">
      {/* Edit Actions Group */}
      <div className="toolbar-group">
        <button className="toolbar-btn" onClick={onUndo} title="Undo (Ctrl+Z)">
          <Undo2 size={18} />
          <span className="btn-label">Undo</span>
        </button>
        <button className="toolbar-btn" onClick={onRedo} title="Redo (Ctrl+Y)">
          <Redo2 size={18} />
          <span className="btn-label">Redo</span>
        </button>
      </div>

      {/* File Actions Group */}
      <div className="toolbar-group">
        <button className="toolbar-btn" onClick={onImport} title="Import CSV/Excel">
          <Upload size={18} />
          <span className="btn-label">Import</span>
        </button>
        <button className="toolbar-btn" onClick={onExportCSV} title="Export as CSV">
          <Download size={18} />
          <span className="btn-label">Export CSV</span>
        </button>
        <button className="toolbar-btn" onClick={onExportExcel} title="Export as Excel">
          <Download size={18} />
          <span className="btn-label">Export Excel</span>
        </button>
      </div>

      {/* Collaboration Group */}
      <div className="toolbar-group">
        <button className="toolbar-btn" onClick={onShare} title="Share spreadsheet">
          <Share2 size={18} />
          <span className="btn-label">Share</span>
        </button>
        <button className="toolbar-btn" onClick={onHistory} title="Version history">
          <History size={18} />
          <span className="btn-label">History</span>
        </button>
        <button className="toolbar-btn" onClick={onComments} title="Comments">
          <MessageSquare size={18} />
          <span className="btn-label">Comments</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
